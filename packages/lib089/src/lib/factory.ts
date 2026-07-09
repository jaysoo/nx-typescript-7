import type { AnyRecord089, RecordKind089, ByKind089 } from './models.js';

let seq089 = 0;

export function create089<K extends RecordKind089>(kind: K, label: string, weight: number): ByKind089[K] {
  seq089 += 1;
  const rec = {
    id: `${kind}-${seq089}`,
    createdAt: seq089,
    updatedAt: seq089,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq089 },
  };
  return rec as unknown as ByKind089[K];
}

export function createBatch089(count: number): AnyRecord089[] {
  const kinds = ['record-089-0', 'record-089-1', 'record-089-2', 'record-089-3', 'record-089-4', 'record-089-5', 'record-089-6', 'record-089-7', 'record-089-8', 'record-089-9'] as const;
  const out: AnyRecord089[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create089(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
