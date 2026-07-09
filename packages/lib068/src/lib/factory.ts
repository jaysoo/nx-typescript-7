import type { AnyRecord068, RecordKind068, ByKind068 } from './models.js';

let seq068 = 0;

export function create068<K extends RecordKind068>(kind: K, label: string, weight: number): ByKind068[K] {
  seq068 += 1;
  const rec = {
    id: `${kind}-${seq068}`,
    createdAt: seq068,
    updatedAt: seq068,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq068 },
  };
  return rec as unknown as ByKind068[K];
}

export function createBatch068(count: number): AnyRecord068[] {
  const kinds = ['record-068-0', 'record-068-1', 'record-068-2', 'record-068-3', 'record-068-4', 'record-068-5', 'record-068-6', 'record-068-7', 'record-068-8', 'record-068-9'] as const;
  const out: AnyRecord068[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create068(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
