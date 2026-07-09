import type { AnyRecord039, RecordKind039, ByKind039 } from './models.js';

let seq039 = 0;

export function create039<K extends RecordKind039>(kind: K, label: string, weight: number): ByKind039[K] {
  seq039 += 1;
  const rec = {
    id: `${kind}-${seq039}`,
    createdAt: seq039,
    updatedAt: seq039,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq039 },
  };
  return rec as unknown as ByKind039[K];
}

export function createBatch039(count: number): AnyRecord039[] {
  const kinds = ['record-039-0', 'record-039-1', 'record-039-2', 'record-039-3', 'record-039-4', 'record-039-5', 'record-039-6', 'record-039-7', 'record-039-8', 'record-039-9'] as const;
  const out: AnyRecord039[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create039(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
