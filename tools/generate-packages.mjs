/**
 * Generate 100 workspace packages (lib001..lib100) in 10 layers of 10.
 * Layer 0 has no workspace deps; each package in layer L depends on
 * 2 deterministic packages from layer L-1. Re-runnable (overwrites).
 */
import { mkdirSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const COUNT = 100;
const PER_LAYER = 10;

const pad = (i) => String(i).padStart(3, '0');
const name = (i) => `lib${pad(i)}`;

function depsOf(i) {
  const layer = Math.floor((i - 1) / PER_LAYER);
  if (layer === 0) return [];
  const base = (layer - 1) * PER_LAYER;
  const a = base + ((i * 7) % PER_LAYER) + 1;
  const b = base + ((i * 3) % PER_LAYER) + 1;
  return [...new Set([a, b])];
}

function srcModels(i) {
  const n = pad(i);
  let out = `export interface Entity${n} {\n  id: string;\n  createdAt: number;\n  updatedAt: number;\n  revision: number;\n}\n\n`;
  for (let k = 0; k < 10; k++) {
    out += `export interface Record${n}x${k} extends Entity${n} {\n  kind: 'record-${n}-${k}';\n  label: string;\n  weight: number;\n  tags: readonly string[];\n  attrs: Readonly<Record<string, string | number | boolean>>;\n}\n\n`;
  }
  out += `export type AnyRecord${n} =\n${Array.from({ length: 10 }, (_, k) => `  | Record${n}x${k}`).join('\n')};\n\n`;
  out += `export type RecordKind${n} = AnyRecord${n}['kind'];\n\n`;
  out += `export type PartialDeep${n}<T> = {\n  [K in keyof T]?: T[K] extends object ? PartialDeep${n}<T[K]> : T[K];\n};\n\n`;
  out += `export type ByKind${n} = {\n  [R in AnyRecord${n} as R['kind']]: R;\n};\n`;
  return out;
}

function srcOps(i) {
  const n = pad(i);
  return `import type { AnyRecord${n}, ByKind${n}, Entity${n}, RecordKind${n} } from './models.js';

export function pick${n}<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind${n}(records: readonly AnyRecord${n}[]): Partial<{ [K in RecordKind${n}]: ByKind${n}[K][] }> {
  const out: Partial<{ [K in RecordKind${n}]: ByKind${n}[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord${n}[]).push(rec);
  }
  return out;
}

export function totalWeight${n}(records: readonly AnyRecord${n}[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch${n}<T extends Entity${n}>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries${n}<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind${n}<K extends RecordKind${n}>(rec: AnyRecord${n}, kind: K): asserts rec is ByKind${n}[K] {
  if (rec.kind !== kind) {
    throw new Error(\`expected \${kind}, got \${rec.kind}\`);
  }
}
`;
}

function srcFactory(i) {
  const n = pad(i);
  return `import type { AnyRecord${n}, RecordKind${n}, ByKind${n} } from './models.js';

let seq${n} = 0;

export function create${n}<K extends RecordKind${n}>(kind: K, label: string, weight: number): ByKind${n}[K] {
  seq${n} += 1;
  const rec = {
    id: \`\${kind}-\${seq${n}}\`,
    createdAt: seq${n},
    updatedAt: seq${n},
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq${n} },
  };
  return rec as unknown as ByKind${n}[K];
}

export function createBatch${n}(count: number): AnyRecord${n}[] {
  const kinds = [${Array.from({ length: 10 }, (_, k) => `'record-${n}-${k}'`).join(', ')}] as const;
  const out: AnyRecord${n}[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create${n}(kinds[idx % kinds.length], \`item-\${idx}\`, idx * 0.5));
  }
  return out;
}
`;
}

function srcCompose(i, deps) {
  const n = pad(i);
  if (deps.length === 0) {
    return `import { createBatch${n} } from './factory.js';
import { totalWeight${n} } from './ops.js';

export function summary${n}(): { count: number; weight: number } {
  const batch = createBatch${n}(25);
  return { count: batch.length, weight: totalWeight${n}(batch) };
}
`;
  }
  const imports = deps
    .map((d) => `import { summary${pad(d)} } from '@org/${name(d)}';`)
    .join('\n');
  const calls = deps.map((d) => `summary${pad(d)}()`).join(', ');
  return `${imports}
import { createBatch${n} } from './factory.js';
import { totalWeight${n} } from './ops.js';

export function summary${n}(): { count: number; weight: number } {
  const upstream = [${calls}];
  const batch = createBatch${n}(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight${n}(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
`;
}

rmSync(join(root, 'packages'), { recursive: true, force: true });

for (let i = 1; i <= COUNT; i++) {
  const pkg = name(i);
  const deps = depsOf(i);
  const dir = join(root, 'packages', pkg);
  mkdirSync(join(dir, 'src', 'lib'), { recursive: true });

  const dependencies = { tslib: '^2.3.0' };
  for (const d of deps) {
    dependencies[`@org/${name(d)}`] = '0.0.1';
  }

  writeFileSync(
    join(dir, 'package.json'),
    JSON.stringify(
      {
        name: `@org/${pkg}`,
        version: '0.0.1',
        private: true,
        type: 'module',
        main: './dist/index.js',
        module: './dist/index.js',
        types: './dist/index.d.ts',
        exports: {
          './package.json': './package.json',
          '.': {
            '@org/source': './src/index.ts',
            types: './dist/index.d.ts',
            import: './dist/index.js',
            default: './dist/index.js',
          },
        },
        dependencies,
      },
      null,
      2
    ) + '\n'
  );

  writeFileSync(
    join(dir, 'tsconfig.json'),
    JSON.stringify(
      {
        extends: '../../tsconfig.base.json',
        files: [],
        include: [],
        references: [{ path: './tsconfig.lib.json' }],
      },
      null,
      2
    ) + '\n'
  );

  writeFileSync(
    join(dir, 'tsconfig.lib.json'),
    JSON.stringify(
      {
        extends: '../../tsconfig.base.json',
        compilerOptions: {
          rootDir: 'src',
          outDir: 'dist',
          tsBuildInfoFile: 'dist/tsconfig.lib.tsbuildinfo',
          emitDeclarationOnly: false,
          forceConsistentCasingInFileNames: true,
          types: ['node'],
        },
        include: ['src/**/*.ts'],
        references: deps.map((d) => ({ path: `../${name(d)}/tsconfig.lib.json` })),
      },
      null,
      2
    ) + '\n'
  );

  writeFileSync(join(dir, 'src', 'lib', 'models.ts'), srcModels(i));
  writeFileSync(join(dir, 'src', 'lib', 'ops.ts'), srcOps(i));
  writeFileSync(join(dir, 'src', 'lib', 'factory.ts'), srcFactory(i));
  writeFileSync(join(dir, 'src', 'lib', 'compose.ts'), srcCompose(i, deps));
  writeFileSync(
    join(dir, 'src', 'index.ts'),
    `export * from './lib/models.js';
export * from './lib/ops.js';
export * from './lib/factory.js';
export * from './lib/compose.js';
`
  );
  writeFileSync(join(dir, 'README.md'), `# @org/${pkg}\n`);
}

writeFileSync(
  join(root, 'tsconfig.json'),
  JSON.stringify(
    {
      extends: './tsconfig.base.json',
      compileOnSave: false,
      files: [],
      references: Array.from({ length: COUNT }, (_, idx) => ({
        path: `./packages/${name(idx + 1)}`,
      })),
    },
    null,
    2
  ) + '\n'
);

console.log(`generated ${readdirSync(join(root, 'packages')).length} packages`);
