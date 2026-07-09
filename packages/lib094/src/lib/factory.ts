import type { AnyRecord094, RecordKind094, ByKind094 } from './models.js';

let seq094 = 0;

export function create094<K extends RecordKind094>(kind: K, label: string, weight: number): ByKind094[K] {
  seq094 += 1;
  const rec = {
    id: `${kind}-${seq094}`,
    createdAt: seq094,
    updatedAt: seq094,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq094 },
  };
  return rec as unknown as ByKind094[K];
}

export function createBatch094(count: number): AnyRecord094[] {
  const kinds = ['record-094-0', 'record-094-1', 'record-094-2', 'record-094-3', 'record-094-4', 'record-094-5', 'record-094-6', 'record-094-7', 'record-094-8', 'record-094-9'] as const;
  const out: AnyRecord094[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create094(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
