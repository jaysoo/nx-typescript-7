import type { AnyRecord030, RecordKind030, ByKind030 } from './models.js';

let seq030 = 0;

export function create030<K extends RecordKind030>(kind: K, label: string, weight: number): ByKind030[K] {
  seq030 += 1;
  const rec = {
    id: `${kind}-${seq030}`,
    createdAt: seq030,
    updatedAt: seq030,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq030 },
  };
  return rec as unknown as ByKind030[K];
}

export function createBatch030(count: number): AnyRecord030[] {
  const kinds = ['record-030-0', 'record-030-1', 'record-030-2', 'record-030-3', 'record-030-4', 'record-030-5', 'record-030-6', 'record-030-7', 'record-030-8', 'record-030-9'] as const;
  const out: AnyRecord030[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create030(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
