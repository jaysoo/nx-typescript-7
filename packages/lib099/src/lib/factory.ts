import type { AnyRecord099, RecordKind099, ByKind099 } from './models.js';

let seq099 = 0;

export function create099<K extends RecordKind099>(kind: K, label: string, weight: number): ByKind099[K] {
  seq099 += 1;
  const rec = {
    id: `${kind}-${seq099}`,
    createdAt: seq099,
    updatedAt: seq099,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq099 },
  };
  return rec as unknown as ByKind099[K];
}

export function createBatch099(count: number): AnyRecord099[] {
  const kinds = ['record-099-0', 'record-099-1', 'record-099-2', 'record-099-3', 'record-099-4', 'record-099-5', 'record-099-6', 'record-099-7', 'record-099-8', 'record-099-9'] as const;
  const out: AnyRecord099[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create099(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
