import type { AnyRecord009, RecordKind009, ByKind009 } from './models.js';

let seq009 = 0;

export function create009<K extends RecordKind009>(kind: K, label: string, weight: number): ByKind009[K] {
  seq009 += 1;
  const rec = {
    id: `${kind}-${seq009}`,
    createdAt: seq009,
    updatedAt: seq009,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq009 },
  };
  return rec as unknown as ByKind009[K];
}

export function createBatch009(count: number): AnyRecord009[] {
  const kinds = ['record-009-0', 'record-009-1', 'record-009-2', 'record-009-3', 'record-009-4', 'record-009-5', 'record-009-6', 'record-009-7', 'record-009-8', 'record-009-9'] as const;
  const out: AnyRecord009[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create009(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
