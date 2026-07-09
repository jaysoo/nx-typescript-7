import type { AnyRecord097, RecordKind097, ByKind097 } from './models.js';

let seq097 = 0;

export function create097<K extends RecordKind097>(kind: K, label: string, weight: number): ByKind097[K] {
  seq097 += 1;
  const rec = {
    id: `${kind}-${seq097}`,
    createdAt: seq097,
    updatedAt: seq097,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq097 },
  };
  return rec as unknown as ByKind097[K];
}

export function createBatch097(count: number): AnyRecord097[] {
  const kinds = ['record-097-0', 'record-097-1', 'record-097-2', 'record-097-3', 'record-097-4', 'record-097-5', 'record-097-6', 'record-097-7', 'record-097-8', 'record-097-9'] as const;
  const out: AnyRecord097[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create097(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
