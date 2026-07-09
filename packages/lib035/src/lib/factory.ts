import type { AnyRecord035, RecordKind035, ByKind035 } from './models.js';

let seq035 = 0;

export function create035<K extends RecordKind035>(kind: K, label: string, weight: number): ByKind035[K] {
  seq035 += 1;
  const rec = {
    id: `${kind}-${seq035}`,
    createdAt: seq035,
    updatedAt: seq035,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq035 },
  };
  return rec as unknown as ByKind035[K];
}

export function createBatch035(count: number): AnyRecord035[] {
  const kinds = ['record-035-0', 'record-035-1', 'record-035-2', 'record-035-3', 'record-035-4', 'record-035-5', 'record-035-6', 'record-035-7', 'record-035-8', 'record-035-9'] as const;
  const out: AnyRecord035[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create035(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
