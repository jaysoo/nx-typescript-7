/**
 * Generate workspace packages with tunable compile weight.
 *
 *   node tools/generate-packages.mjs [--count 25] [--per-layer 5] [--files 30] [--kinds 12]
 *
 * count: number of packages, per-layer: layer width (each package in layer L
 * depends on 2 deterministic packages from layer L-1), files: feature modules
 * per package, kinds: discriminated-union width per module (checker weight).
 * Re-runnable (wipes packages/).
 */
import { mkdirSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function arg(name, dflt) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx === -1 ? dflt : Number(process.argv[idx + 1]);
}

const COUNT = arg('count', 25);
const PER_LAYER = arg('per-layer', 5);
const FILES = arg('files', 30);
const KINDS = arg('kinds', 12);

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

// One self-contained feature module: discriminated union + mapped types +
// generic ops + factory + a pipeline exercising inference.
function featureModule(i, f) {
  const t = `P${pad(i)}F${f}`;
  const kinds = Array.from({ length: KINDS }, (_, k) => k);
  let out = `export interface Base${t} {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
  meta: Readonly<Record<string, string | number | boolean | null>>;
}

`;
  for (const k of kinds) {
    out += `export interface Rec${t}x${k} extends Base${t} {
  kind: 'k-${t}-${k}';
  label: string;
  weight: number;
  rank: ${k};
  tags: readonly string[];
  payload: { values: number[]; flags: Record<string, boolean>; note?: string };
}

`;
  }
  out += `export type Any${t} =
${kinds.map((k) => `  | Rec${t}x${k}`).join('\n')};

export type Kind${t} = Any${t}['kind'];

export type ByKind${t} = { [R in Any${t} as R['kind']]: R };

export type Patch${t}<T> = { [K in keyof T]?: T[K] extends object ? Patch${t}<T[K]> : T[K] };

export type Summary${t} = {
  [K in Kind${t}]: { count: number; weight: number; ranks: number[] };
};

const kinds${t} = [${kinds.map((k) => `'k-${t}-${k}'`).join(', ')}] as const;

let seq${t} = 0;

export function create${t}<K extends Kind${t}>(kind: K, label: string, weight: number): ByKind${t}[K] {
  seq${t} += 1;
  const rank = kinds${t}.indexOf(kind);
  const rec = {
    id: \`\${kind}-\${seq${t}}\`,
    createdAt: seq${t},
    updatedAt: seq${t},
    revision: 1,
    meta: { seq: seq${t}, source: label },
    kind,
    label,
    weight,
    rank,
    tags: [label, kind],
    payload: { values: [weight, rank], flags: { fresh: true }, note: label },
  };
  return rec as unknown as ByKind${t}[K];
}

export function batch${t}(count: number): Any${t}[] {
  const out: Any${t}[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create${t}(kinds${t}[idx % kinds${t}.length], \`item-\${idx}\`, idx * 0.5));
  }
  return out;
}

export function pick${t}<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupBy${t}(records: readonly Any${t}[]): Partial<{ [K in Kind${t}]: ByKind${t}[K][] }> {
  const out: Partial<{ [K in Kind${t}]: ByKind${t}[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as Any${t}[]).push(rec);
  }
  return out;
}

export function summarize${t}(records: readonly Any${t}[]): Partial<Summary${t}> {
  const grouped = groupBy${t}(records);
  const out: Partial<Summary${t}> = {};
  for (const kind of kinds${t}) {
    const bucket = grouped[kind];
    if (!bucket) continue;
    out[kind] = {
      count: bucket.length,
      weight: bucket.reduce((sum, r) => sum + r.weight, 0),
      ranks: bucket.map((r) => r.rank as number),
    };
  }
  return out;
}

export function merge${t}<T extends Base${t}>(target: T, patch: Patch${t}<T>): T {
  return { ...target, ...patch, revision: target.revision + 1 };
}

export function totalWeight${t}(records: readonly Any${t}[]): number {
  const summary = summarize${t}(records);
  let total = 0;
  for (const kind of kinds${t}) {
    total += summary[kind]?.weight ?? 0;
  }
  return total;
}
`;
  return out;
}

function composeModule(i, deps) {
  const n = pad(i);
  const localImports = Array.from(
    { length: FILES },
    (_, f) => `import { batchP${n}F${f}, totalWeightP${n}F${f} } from './feature${f}.js';`
  ).join('\n');
  const localCalls = Array.from(
    { length: FILES },
    (_, f) => `    totalWeightP${n}F${f}(batchP${n}F${f}(20)),`
  ).join('\n');
  const depImports = deps
    .map((d) => `import { summary${pad(d)} } from '@org/${name(d)}';`)
    .join('\n');
  const depCalls = deps.map((d) => `summary${pad(d)}()`).join(', ');
  return `${depImports}${deps.length ? '\n' : ''}${localImports}

export function summary${n}(): { count: number; weight: number } {
  const upstream: { count: number; weight: number }[] = [${depCalls}];
  const weights = [
${localCalls}
  ];
  return {
    count: weights.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: weights.reduce((sum, w) => sum + w, 0) + upstream.reduce((sum, s) => sum + s.weight, 0),
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
    dependencies[`@org/${name(d)}`] = 'workspace:*';
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

  const indexLines = [];
  for (let f = 0; f < FILES; f++) {
    writeFileSync(join(dir, 'src', 'lib', `feature${f}.ts`), featureModule(i, f));
    indexLines.push(`export * from './lib/feature${f}.js';`);
  }
  writeFileSync(join(dir, 'src', 'lib', 'compose.ts'), composeModule(i, deps));
  indexLines.push(`export * from './lib/compose.js';`);
  writeFileSync(join(dir, 'src', 'index.ts'), indexLines.join('\n') + '\n');
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

console.log(
  `generated ${readdirSync(join(root, 'packages')).length} packages (files=${FILES}, kinds=${KINDS}, per-layer=${PER_LAYER})`
);
