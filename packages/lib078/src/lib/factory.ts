import type { AnyRecord078, RecordKind078, ByKind078 } from './models.js';

let seq078 = 0;

export function create078<K extends RecordKind078>(kind: K, label: string, weight: number): ByKind078[K] {
  seq078 += 1;
  const rec = {
    id: `${kind}-${seq078}`,
    createdAt: seq078,
    updatedAt: seq078,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq078 },
  };
  return rec as unknown as ByKind078[K];
}

export function createBatch078(count: number): AnyRecord078[] {
  const kinds = ['record-078-0', 'record-078-1', 'record-078-2', 'record-078-3', 'record-078-4', 'record-078-5', 'record-078-6', 'record-078-7', 'record-078-8', 'record-078-9'] as const;
  const out: AnyRecord078[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create078(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
