import type { AnyRecord013, RecordKind013, ByKind013 } from './models.js';

let seq013 = 0;

export function create013<K extends RecordKind013>(kind: K, label: string, weight: number): ByKind013[K] {
  seq013 += 1;
  const rec = {
    id: `${kind}-${seq013}`,
    createdAt: seq013,
    updatedAt: seq013,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq013 },
  };
  return rec as unknown as ByKind013[K];
}

export function createBatch013(count: number): AnyRecord013[] {
  const kinds = ['record-013-0', 'record-013-1', 'record-013-2', 'record-013-3', 'record-013-4', 'record-013-5', 'record-013-6', 'record-013-7', 'record-013-8', 'record-013-9'] as const;
  const out: AnyRecord013[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create013(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
