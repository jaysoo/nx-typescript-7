import type { AnyRecord024, RecordKind024, ByKind024 } from './models.js';

let seq024 = 0;

export function create024<K extends RecordKind024>(kind: K, label: string, weight: number): ByKind024[K] {
  seq024 += 1;
  const rec = {
    id: `${kind}-${seq024}`,
    createdAt: seq024,
    updatedAt: seq024,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq024 },
  };
  return rec as unknown as ByKind024[K];
}

export function createBatch024(count: number): AnyRecord024[] {
  const kinds = ['record-024-0', 'record-024-1', 'record-024-2', 'record-024-3', 'record-024-4', 'record-024-5', 'record-024-6', 'record-024-7', 'record-024-8', 'record-024-9'] as const;
  const out: AnyRecord024[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create024(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
