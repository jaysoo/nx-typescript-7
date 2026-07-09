import type { AnyRecord063, RecordKind063, ByKind063 } from './models.js';

let seq063 = 0;

export function create063<K extends RecordKind063>(kind: K, label: string, weight: number): ByKind063[K] {
  seq063 += 1;
  const rec = {
    id: `${kind}-${seq063}`,
    createdAt: seq063,
    updatedAt: seq063,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq063 },
  };
  return rec as unknown as ByKind063[K];
}

export function createBatch063(count: number): AnyRecord063[] {
  const kinds = ['record-063-0', 'record-063-1', 'record-063-2', 'record-063-3', 'record-063-4', 'record-063-5', 'record-063-6', 'record-063-7', 'record-063-8', 'record-063-9'] as const;
  const out: AnyRecord063[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create063(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
