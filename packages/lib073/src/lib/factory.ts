import type { AnyRecord073, RecordKind073, ByKind073 } from './models.js';

let seq073 = 0;

export function create073<K extends RecordKind073>(kind: K, label: string, weight: number): ByKind073[K] {
  seq073 += 1;
  const rec = {
    id: `${kind}-${seq073}`,
    createdAt: seq073,
    updatedAt: seq073,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq073 },
  };
  return rec as unknown as ByKind073[K];
}

export function createBatch073(count: number): AnyRecord073[] {
  const kinds = ['record-073-0', 'record-073-1', 'record-073-2', 'record-073-3', 'record-073-4', 'record-073-5', 'record-073-6', 'record-073-7', 'record-073-8', 'record-073-9'] as const;
  const out: AnyRecord073[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create073(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
