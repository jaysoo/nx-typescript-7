import type { AnyRecord066, RecordKind066, ByKind066 } from './models.js';

let seq066 = 0;

export function create066<K extends RecordKind066>(kind: K, label: string, weight: number): ByKind066[K] {
  seq066 += 1;
  const rec = {
    id: `${kind}-${seq066}`,
    createdAt: seq066,
    updatedAt: seq066,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq066 },
  };
  return rec as unknown as ByKind066[K];
}

export function createBatch066(count: number): AnyRecord066[] {
  const kinds = ['record-066-0', 'record-066-1', 'record-066-2', 'record-066-3', 'record-066-4', 'record-066-5', 'record-066-6', 'record-066-7', 'record-066-8', 'record-066-9'] as const;
  const out: AnyRecord066[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create066(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
