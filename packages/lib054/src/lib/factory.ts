import type { AnyRecord054, RecordKind054, ByKind054 } from './models.js';

let seq054 = 0;

export function create054<K extends RecordKind054>(kind: K, label: string, weight: number): ByKind054[K] {
  seq054 += 1;
  const rec = {
    id: `${kind}-${seq054}`,
    createdAt: seq054,
    updatedAt: seq054,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq054 },
  };
  return rec as unknown as ByKind054[K];
}

export function createBatch054(count: number): AnyRecord054[] {
  const kinds = ['record-054-0', 'record-054-1', 'record-054-2', 'record-054-3', 'record-054-4', 'record-054-5', 'record-054-6', 'record-054-7', 'record-054-8', 'record-054-9'] as const;
  const out: AnyRecord054[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create054(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
