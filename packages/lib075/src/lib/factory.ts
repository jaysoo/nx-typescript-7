import type { AnyRecord075, RecordKind075, ByKind075 } from './models.js';

let seq075 = 0;

export function create075<K extends RecordKind075>(kind: K, label: string, weight: number): ByKind075[K] {
  seq075 += 1;
  const rec = {
    id: `${kind}-${seq075}`,
    createdAt: seq075,
    updatedAt: seq075,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq075 },
  };
  return rec as unknown as ByKind075[K];
}

export function createBatch075(count: number): AnyRecord075[] {
  const kinds = ['record-075-0', 'record-075-1', 'record-075-2', 'record-075-3', 'record-075-4', 'record-075-5', 'record-075-6', 'record-075-7', 'record-075-8', 'record-075-9'] as const;
  const out: AnyRecord075[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create075(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
