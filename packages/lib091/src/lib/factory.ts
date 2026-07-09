import type { AnyRecord091, RecordKind091, ByKind091 } from './models.js';

let seq091 = 0;

export function create091<K extends RecordKind091>(kind: K, label: string, weight: number): ByKind091[K] {
  seq091 += 1;
  const rec = {
    id: `${kind}-${seq091}`,
    createdAt: seq091,
    updatedAt: seq091,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq091 },
  };
  return rec as unknown as ByKind091[K];
}

export function createBatch091(count: number): AnyRecord091[] {
  const kinds = ['record-091-0', 'record-091-1', 'record-091-2', 'record-091-3', 'record-091-4', 'record-091-5', 'record-091-6', 'record-091-7', 'record-091-8', 'record-091-9'] as const;
  const out: AnyRecord091[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create091(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
