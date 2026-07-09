import type { AnyRecord006, RecordKind006, ByKind006 } from './models.js';

let seq006 = 0;

export function create006<K extends RecordKind006>(kind: K, label: string, weight: number): ByKind006[K] {
  seq006 += 1;
  const rec = {
    id: `${kind}-${seq006}`,
    createdAt: seq006,
    updatedAt: seq006,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq006 },
  };
  return rec as unknown as ByKind006[K];
}

export function createBatch006(count: number): AnyRecord006[] {
  const kinds = ['record-006-0', 'record-006-1', 'record-006-2', 'record-006-3', 'record-006-4', 'record-006-5', 'record-006-6', 'record-006-7', 'record-006-8', 'record-006-9'] as const;
  const out: AnyRecord006[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create006(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
