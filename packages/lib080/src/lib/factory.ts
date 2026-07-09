import type { AnyRecord080, RecordKind080, ByKind080 } from './models.js';

let seq080 = 0;

export function create080<K extends RecordKind080>(kind: K, label: string, weight: number): ByKind080[K] {
  seq080 += 1;
  const rec = {
    id: `${kind}-${seq080}`,
    createdAt: seq080,
    updatedAt: seq080,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq080 },
  };
  return rec as unknown as ByKind080[K];
}

export function createBatch080(count: number): AnyRecord080[] {
  const kinds = ['record-080-0', 'record-080-1', 'record-080-2', 'record-080-3', 'record-080-4', 'record-080-5', 'record-080-6', 'record-080-7', 'record-080-8', 'record-080-9'] as const;
  const out: AnyRecord080[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create080(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
