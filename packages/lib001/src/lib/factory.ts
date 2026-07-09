import type { AnyRecord001, RecordKind001, ByKind001 } from './models.js';

let seq001 = 0;

export function create001<K extends RecordKind001>(kind: K, label: string, weight: number): ByKind001[K] {
  seq001 += 1;
  const rec = {
    id: `${kind}-${seq001}`,
    createdAt: seq001,
    updatedAt: seq001,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq001 },
  };
  return rec as unknown as ByKind001[K];
}

export function createBatch001(count: number): AnyRecord001[] {
  const kinds = ['record-001-0', 'record-001-1', 'record-001-2', 'record-001-3', 'record-001-4', 'record-001-5', 'record-001-6', 'record-001-7', 'record-001-8', 'record-001-9'] as const;
  const out: AnyRecord001[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create001(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
