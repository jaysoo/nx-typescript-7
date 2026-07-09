import type { AnyRecord005, RecordKind005, ByKind005 } from './models.js';

let seq005 = 0;

export function create005<K extends RecordKind005>(kind: K, label: string, weight: number): ByKind005[K] {
  seq005 += 1;
  const rec = {
    id: `${kind}-${seq005}`,
    createdAt: seq005,
    updatedAt: seq005,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq005 },
  };
  return rec as unknown as ByKind005[K];
}

export function createBatch005(count: number): AnyRecord005[] {
  const kinds = ['record-005-0', 'record-005-1', 'record-005-2', 'record-005-3', 'record-005-4', 'record-005-5', 'record-005-6', 'record-005-7', 'record-005-8', 'record-005-9'] as const;
  const out: AnyRecord005[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create005(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
