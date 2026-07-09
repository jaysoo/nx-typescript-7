import type { AnyRecord074, RecordKind074, ByKind074 } from './models.js';

let seq074 = 0;

export function create074<K extends RecordKind074>(kind: K, label: string, weight: number): ByKind074[K] {
  seq074 += 1;
  const rec = {
    id: `${kind}-${seq074}`,
    createdAt: seq074,
    updatedAt: seq074,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq074 },
  };
  return rec as unknown as ByKind074[K];
}

export function createBatch074(count: number): AnyRecord074[] {
  const kinds = ['record-074-0', 'record-074-1', 'record-074-2', 'record-074-3', 'record-074-4', 'record-074-5', 'record-074-6', 'record-074-7', 'record-074-8', 'record-074-9'] as const;
  const out: AnyRecord074[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create074(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
