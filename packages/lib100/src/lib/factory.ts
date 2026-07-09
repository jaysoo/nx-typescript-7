import type { AnyRecord100, RecordKind100, ByKind100 } from './models.js';

let seq100 = 0;

export function create100<K extends RecordKind100>(kind: K, label: string, weight: number): ByKind100[K] {
  seq100 += 1;
  const rec = {
    id: `${kind}-${seq100}`,
    createdAt: seq100,
    updatedAt: seq100,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq100 },
  };
  return rec as unknown as ByKind100[K];
}

export function createBatch100(count: number): AnyRecord100[] {
  const kinds = ['record-100-0', 'record-100-1', 'record-100-2', 'record-100-3', 'record-100-4', 'record-100-5', 'record-100-6', 'record-100-7', 'record-100-8', 'record-100-9'] as const;
  const out: AnyRecord100[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create100(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
