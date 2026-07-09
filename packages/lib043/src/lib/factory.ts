import type { AnyRecord043, RecordKind043, ByKind043 } from './models.js';

let seq043 = 0;

export function create043<K extends RecordKind043>(kind: K, label: string, weight: number): ByKind043[K] {
  seq043 += 1;
  const rec = {
    id: `${kind}-${seq043}`,
    createdAt: seq043,
    updatedAt: seq043,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq043 },
  };
  return rec as unknown as ByKind043[K];
}

export function createBatch043(count: number): AnyRecord043[] {
  const kinds = ['record-043-0', 'record-043-1', 'record-043-2', 'record-043-3', 'record-043-4', 'record-043-5', 'record-043-6', 'record-043-7', 'record-043-8', 'record-043-9'] as const;
  const out: AnyRecord043[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create043(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
