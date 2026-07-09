import type { AnyRecord093, RecordKind093, ByKind093 } from './models.js';

let seq093 = 0;

export function create093<K extends RecordKind093>(kind: K, label: string, weight: number): ByKind093[K] {
  seq093 += 1;
  const rec = {
    id: `${kind}-${seq093}`,
    createdAt: seq093,
    updatedAt: seq093,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq093 },
  };
  return rec as unknown as ByKind093[K];
}

export function createBatch093(count: number): AnyRecord093[] {
  const kinds = ['record-093-0', 'record-093-1', 'record-093-2', 'record-093-3', 'record-093-4', 'record-093-5', 'record-093-6', 'record-093-7', 'record-093-8', 'record-093-9'] as const;
  const out: AnyRecord093[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create093(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
