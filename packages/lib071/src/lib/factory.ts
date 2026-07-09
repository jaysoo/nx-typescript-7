import type { AnyRecord071, RecordKind071, ByKind071 } from './models.js';

let seq071 = 0;

export function create071<K extends RecordKind071>(kind: K, label: string, weight: number): ByKind071[K] {
  seq071 += 1;
  const rec = {
    id: `${kind}-${seq071}`,
    createdAt: seq071,
    updatedAt: seq071,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq071 },
  };
  return rec as unknown as ByKind071[K];
}

export function createBatch071(count: number): AnyRecord071[] {
  const kinds = ['record-071-0', 'record-071-1', 'record-071-2', 'record-071-3', 'record-071-4', 'record-071-5', 'record-071-6', 'record-071-7', 'record-071-8', 'record-071-9'] as const;
  const out: AnyRecord071[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create071(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
