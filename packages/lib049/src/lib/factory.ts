import type { AnyRecord049, RecordKind049, ByKind049 } from './models.js';

let seq049 = 0;

export function create049<K extends RecordKind049>(kind: K, label: string, weight: number): ByKind049[K] {
  seq049 += 1;
  const rec = {
    id: `${kind}-${seq049}`,
    createdAt: seq049,
    updatedAt: seq049,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq049 },
  };
  return rec as unknown as ByKind049[K];
}

export function createBatch049(count: number): AnyRecord049[] {
  const kinds = ['record-049-0', 'record-049-1', 'record-049-2', 'record-049-3', 'record-049-4', 'record-049-5', 'record-049-6', 'record-049-7', 'record-049-8', 'record-049-9'] as const;
  const out: AnyRecord049[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create049(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
