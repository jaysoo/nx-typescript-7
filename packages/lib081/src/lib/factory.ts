import type { AnyRecord081, RecordKind081, ByKind081 } from './models.js';

let seq081 = 0;

export function create081<K extends RecordKind081>(kind: K, label: string, weight: number): ByKind081[K] {
  seq081 += 1;
  const rec = {
    id: `${kind}-${seq081}`,
    createdAt: seq081,
    updatedAt: seq081,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq081 },
  };
  return rec as unknown as ByKind081[K];
}

export function createBatch081(count: number): AnyRecord081[] {
  const kinds = ['record-081-0', 'record-081-1', 'record-081-2', 'record-081-3', 'record-081-4', 'record-081-5', 'record-081-6', 'record-081-7', 'record-081-8', 'record-081-9'] as const;
  const out: AnyRecord081[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create081(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
