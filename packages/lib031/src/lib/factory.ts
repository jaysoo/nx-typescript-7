import type { AnyRecord031, RecordKind031, ByKind031 } from './models.js';

let seq031 = 0;

export function create031<K extends RecordKind031>(kind: K, label: string, weight: number): ByKind031[K] {
  seq031 += 1;
  const rec = {
    id: `${kind}-${seq031}`,
    createdAt: seq031,
    updatedAt: seq031,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq031 },
  };
  return rec as unknown as ByKind031[K];
}

export function createBatch031(count: number): AnyRecord031[] {
  const kinds = ['record-031-0', 'record-031-1', 'record-031-2', 'record-031-3', 'record-031-4', 'record-031-5', 'record-031-6', 'record-031-7', 'record-031-8', 'record-031-9'] as const;
  const out: AnyRecord031[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create031(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
