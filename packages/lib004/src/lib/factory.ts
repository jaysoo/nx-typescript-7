import type { AnyRecord004, RecordKind004, ByKind004 } from './models.js';

let seq004 = 0;

export function create004<K extends RecordKind004>(kind: K, label: string, weight: number): ByKind004[K] {
  seq004 += 1;
  const rec = {
    id: `${kind}-${seq004}`,
    createdAt: seq004,
    updatedAt: seq004,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq004 },
  };
  return rec as unknown as ByKind004[K];
}

export function createBatch004(count: number): AnyRecord004[] {
  const kinds = ['record-004-0', 'record-004-1', 'record-004-2', 'record-004-3', 'record-004-4', 'record-004-5', 'record-004-6', 'record-004-7', 'record-004-8', 'record-004-9'] as const;
  const out: AnyRecord004[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create004(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
