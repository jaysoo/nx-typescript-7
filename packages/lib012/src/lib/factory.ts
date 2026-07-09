import type { AnyRecord012, RecordKind012, ByKind012 } from './models.js';

let seq012 = 0;

export function create012<K extends RecordKind012>(kind: K, label: string, weight: number): ByKind012[K] {
  seq012 += 1;
  const rec = {
    id: `${kind}-${seq012}`,
    createdAt: seq012,
    updatedAt: seq012,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq012 },
  };
  return rec as unknown as ByKind012[K];
}

export function createBatch012(count: number): AnyRecord012[] {
  const kinds = ['record-012-0', 'record-012-1', 'record-012-2', 'record-012-3', 'record-012-4', 'record-012-5', 'record-012-6', 'record-012-7', 'record-012-8', 'record-012-9'] as const;
  const out: AnyRecord012[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create012(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
