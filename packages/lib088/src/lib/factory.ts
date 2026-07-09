import type { AnyRecord088, RecordKind088, ByKind088 } from './models.js';

let seq088 = 0;

export function create088<K extends RecordKind088>(kind: K, label: string, weight: number): ByKind088[K] {
  seq088 += 1;
  const rec = {
    id: `${kind}-${seq088}`,
    createdAt: seq088,
    updatedAt: seq088,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq088 },
  };
  return rec as unknown as ByKind088[K];
}

export function createBatch088(count: number): AnyRecord088[] {
  const kinds = ['record-088-0', 'record-088-1', 'record-088-2', 'record-088-3', 'record-088-4', 'record-088-5', 'record-088-6', 'record-088-7', 'record-088-8', 'record-088-9'] as const;
  const out: AnyRecord088[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create088(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
