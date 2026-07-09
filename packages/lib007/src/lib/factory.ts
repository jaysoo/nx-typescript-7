import type { AnyRecord007, RecordKind007, ByKind007 } from './models.js';

let seq007 = 0;

export function create007<K extends RecordKind007>(kind: K, label: string, weight: number): ByKind007[K] {
  seq007 += 1;
  const rec = {
    id: `${kind}-${seq007}`,
    createdAt: seq007,
    updatedAt: seq007,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq007 },
  };
  return rec as unknown as ByKind007[K];
}

export function createBatch007(count: number): AnyRecord007[] {
  const kinds = ['record-007-0', 'record-007-1', 'record-007-2', 'record-007-3', 'record-007-4', 'record-007-5', 'record-007-6', 'record-007-7', 'record-007-8', 'record-007-9'] as const;
  const out: AnyRecord007[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create007(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
