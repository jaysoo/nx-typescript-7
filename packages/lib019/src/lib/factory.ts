import type { AnyRecord019, RecordKind019, ByKind019 } from './models.js';

let seq019 = 0;

export function create019<K extends RecordKind019>(kind: K, label: string, weight: number): ByKind019[K] {
  seq019 += 1;
  const rec = {
    id: `${kind}-${seq019}`,
    createdAt: seq019,
    updatedAt: seq019,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq019 },
  };
  return rec as unknown as ByKind019[K];
}

export function createBatch019(count: number): AnyRecord019[] {
  const kinds = ['record-019-0', 'record-019-1', 'record-019-2', 'record-019-3', 'record-019-4', 'record-019-5', 'record-019-6', 'record-019-7', 'record-019-8', 'record-019-9'] as const;
  const out: AnyRecord019[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create019(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
