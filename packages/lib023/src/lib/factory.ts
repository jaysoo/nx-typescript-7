import type { AnyRecord023, RecordKind023, ByKind023 } from './models.js';

let seq023 = 0;

export function create023<K extends RecordKind023>(kind: K, label: string, weight: number): ByKind023[K] {
  seq023 += 1;
  const rec = {
    id: `${kind}-${seq023}`,
    createdAt: seq023,
    updatedAt: seq023,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq023 },
  };
  return rec as unknown as ByKind023[K];
}

export function createBatch023(count: number): AnyRecord023[] {
  const kinds = ['record-023-0', 'record-023-1', 'record-023-2', 'record-023-3', 'record-023-4', 'record-023-5', 'record-023-6', 'record-023-7', 'record-023-8', 'record-023-9'] as const;
  const out: AnyRecord023[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create023(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
