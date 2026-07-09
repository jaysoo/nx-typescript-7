import type { AnyRecord052, RecordKind052, ByKind052 } from './models.js';

let seq052 = 0;

export function create052<K extends RecordKind052>(kind: K, label: string, weight: number): ByKind052[K] {
  seq052 += 1;
  const rec = {
    id: `${kind}-${seq052}`,
    createdAt: seq052,
    updatedAt: seq052,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq052 },
  };
  return rec as unknown as ByKind052[K];
}

export function createBatch052(count: number): AnyRecord052[] {
  const kinds = ['record-052-0', 'record-052-1', 'record-052-2', 'record-052-3', 'record-052-4', 'record-052-5', 'record-052-6', 'record-052-7', 'record-052-8', 'record-052-9'] as const;
  const out: AnyRecord052[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create052(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
