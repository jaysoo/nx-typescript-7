import type { AnyRecord010, RecordKind010, ByKind010 } from './models.js';

let seq010 = 0;

export function create010<K extends RecordKind010>(kind: K, label: string, weight: number): ByKind010[K] {
  seq010 += 1;
  const rec = {
    id: `${kind}-${seq010}`,
    createdAt: seq010,
    updatedAt: seq010,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq010 },
  };
  return rec as unknown as ByKind010[K];
}

export function createBatch010(count: number): AnyRecord010[] {
  const kinds = ['record-010-0', 'record-010-1', 'record-010-2', 'record-010-3', 'record-010-4', 'record-010-5', 'record-010-6', 'record-010-7', 'record-010-8', 'record-010-9'] as const;
  const out: AnyRecord010[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create010(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
