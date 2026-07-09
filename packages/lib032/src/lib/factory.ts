import type { AnyRecord032, RecordKind032, ByKind032 } from './models.js';

let seq032 = 0;

export function create032<K extends RecordKind032>(kind: K, label: string, weight: number): ByKind032[K] {
  seq032 += 1;
  const rec = {
    id: `${kind}-${seq032}`,
    createdAt: seq032,
    updatedAt: seq032,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq032 },
  };
  return rec as unknown as ByKind032[K];
}

export function createBatch032(count: number): AnyRecord032[] {
  const kinds = ['record-032-0', 'record-032-1', 'record-032-2', 'record-032-3', 'record-032-4', 'record-032-5', 'record-032-6', 'record-032-7', 'record-032-8', 'record-032-9'] as const;
  const out: AnyRecord032[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create032(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
