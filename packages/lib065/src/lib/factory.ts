import type { AnyRecord065, RecordKind065, ByKind065 } from './models.js';

let seq065 = 0;

export function create065<K extends RecordKind065>(kind: K, label: string, weight: number): ByKind065[K] {
  seq065 += 1;
  const rec = {
    id: `${kind}-${seq065}`,
    createdAt: seq065,
    updatedAt: seq065,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq065 },
  };
  return rec as unknown as ByKind065[K];
}

export function createBatch065(count: number): AnyRecord065[] {
  const kinds = ['record-065-0', 'record-065-1', 'record-065-2', 'record-065-3', 'record-065-4', 'record-065-5', 'record-065-6', 'record-065-7', 'record-065-8', 'record-065-9'] as const;
  const out: AnyRecord065[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create065(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
