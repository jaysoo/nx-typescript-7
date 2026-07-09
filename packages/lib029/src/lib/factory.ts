import type { AnyRecord029, RecordKind029, ByKind029 } from './models.js';

let seq029 = 0;

export function create029<K extends RecordKind029>(kind: K, label: string, weight: number): ByKind029[K] {
  seq029 += 1;
  const rec = {
    id: `${kind}-${seq029}`,
    createdAt: seq029,
    updatedAt: seq029,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq029 },
  };
  return rec as unknown as ByKind029[K];
}

export function createBatch029(count: number): AnyRecord029[] {
  const kinds = ['record-029-0', 'record-029-1', 'record-029-2', 'record-029-3', 'record-029-4', 'record-029-5', 'record-029-6', 'record-029-7', 'record-029-8', 'record-029-9'] as const;
  const out: AnyRecord029[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create029(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
