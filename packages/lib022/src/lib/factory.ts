import type { AnyRecord022, RecordKind022, ByKind022 } from './models.js';

let seq022 = 0;

export function create022<K extends RecordKind022>(kind: K, label: string, weight: number): ByKind022[K] {
  seq022 += 1;
  const rec = {
    id: `${kind}-${seq022}`,
    createdAt: seq022,
    updatedAt: seq022,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq022 },
  };
  return rec as unknown as ByKind022[K];
}

export function createBatch022(count: number): AnyRecord022[] {
  const kinds = ['record-022-0', 'record-022-1', 'record-022-2', 'record-022-3', 'record-022-4', 'record-022-5', 'record-022-6', 'record-022-7', 'record-022-8', 'record-022-9'] as const;
  const out: AnyRecord022[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create022(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
