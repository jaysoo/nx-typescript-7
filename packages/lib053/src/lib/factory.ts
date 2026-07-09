import type { AnyRecord053, RecordKind053, ByKind053 } from './models.js';

let seq053 = 0;

export function create053<K extends RecordKind053>(kind: K, label: string, weight: number): ByKind053[K] {
  seq053 += 1;
  const rec = {
    id: `${kind}-${seq053}`,
    createdAt: seq053,
    updatedAt: seq053,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq053 },
  };
  return rec as unknown as ByKind053[K];
}

export function createBatch053(count: number): AnyRecord053[] {
  const kinds = ['record-053-0', 'record-053-1', 'record-053-2', 'record-053-3', 'record-053-4', 'record-053-5', 'record-053-6', 'record-053-7', 'record-053-8', 'record-053-9'] as const;
  const out: AnyRecord053[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create053(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
