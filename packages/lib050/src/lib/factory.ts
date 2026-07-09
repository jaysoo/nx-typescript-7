import type { AnyRecord050, RecordKind050, ByKind050 } from './models.js';

let seq050 = 0;

export function create050<K extends RecordKind050>(kind: K, label: string, weight: number): ByKind050[K] {
  seq050 += 1;
  const rec = {
    id: `${kind}-${seq050}`,
    createdAt: seq050,
    updatedAt: seq050,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq050 },
  };
  return rec as unknown as ByKind050[K];
}

export function createBatch050(count: number): AnyRecord050[] {
  const kinds = ['record-050-0', 'record-050-1', 'record-050-2', 'record-050-3', 'record-050-4', 'record-050-5', 'record-050-6', 'record-050-7', 'record-050-8', 'record-050-9'] as const;
  const out: AnyRecord050[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create050(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
