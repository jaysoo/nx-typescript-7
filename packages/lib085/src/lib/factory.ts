import type { AnyRecord085, RecordKind085, ByKind085 } from './models.js';

let seq085 = 0;

export function create085<K extends RecordKind085>(kind: K, label: string, weight: number): ByKind085[K] {
  seq085 += 1;
  const rec = {
    id: `${kind}-${seq085}`,
    createdAt: seq085,
    updatedAt: seq085,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq085 },
  };
  return rec as unknown as ByKind085[K];
}

export function createBatch085(count: number): AnyRecord085[] {
  const kinds = ['record-085-0', 'record-085-1', 'record-085-2', 'record-085-3', 'record-085-4', 'record-085-5', 'record-085-6', 'record-085-7', 'record-085-8', 'record-085-9'] as const;
  const out: AnyRecord085[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create085(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
