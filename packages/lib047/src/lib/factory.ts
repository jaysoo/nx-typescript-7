import type { AnyRecord047, RecordKind047, ByKind047 } from './models.js';

let seq047 = 0;

export function create047<K extends RecordKind047>(kind: K, label: string, weight: number): ByKind047[K] {
  seq047 += 1;
  const rec = {
    id: `${kind}-${seq047}`,
    createdAt: seq047,
    updatedAt: seq047,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq047 },
  };
  return rec as unknown as ByKind047[K];
}

export function createBatch047(count: number): AnyRecord047[] {
  const kinds = ['record-047-0', 'record-047-1', 'record-047-2', 'record-047-3', 'record-047-4', 'record-047-5', 'record-047-6', 'record-047-7', 'record-047-8', 'record-047-9'] as const;
  const out: AnyRecord047[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create047(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
