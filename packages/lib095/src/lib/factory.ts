import type { AnyRecord095, RecordKind095, ByKind095 } from './models.js';

let seq095 = 0;

export function create095<K extends RecordKind095>(kind: K, label: string, weight: number): ByKind095[K] {
  seq095 += 1;
  const rec = {
    id: `${kind}-${seq095}`,
    createdAt: seq095,
    updatedAt: seq095,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq095 },
  };
  return rec as unknown as ByKind095[K];
}

export function createBatch095(count: number): AnyRecord095[] {
  const kinds = ['record-095-0', 'record-095-1', 'record-095-2', 'record-095-3', 'record-095-4', 'record-095-5', 'record-095-6', 'record-095-7', 'record-095-8', 'record-095-9'] as const;
  const out: AnyRecord095[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create095(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
