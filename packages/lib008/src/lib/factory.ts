import type { AnyRecord008, RecordKind008, ByKind008 } from './models.js';

let seq008 = 0;

export function create008<K extends RecordKind008>(kind: K, label: string, weight: number): ByKind008[K] {
  seq008 += 1;
  const rec = {
    id: `${kind}-${seq008}`,
    createdAt: seq008,
    updatedAt: seq008,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq008 },
  };
  return rec as unknown as ByKind008[K];
}

export function createBatch008(count: number): AnyRecord008[] {
  const kinds = ['record-008-0', 'record-008-1', 'record-008-2', 'record-008-3', 'record-008-4', 'record-008-5', 'record-008-6', 'record-008-7', 'record-008-8', 'record-008-9'] as const;
  const out: AnyRecord008[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create008(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
