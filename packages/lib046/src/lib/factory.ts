import type { AnyRecord046, RecordKind046, ByKind046 } from './models.js';

let seq046 = 0;

export function create046<K extends RecordKind046>(kind: K, label: string, weight: number): ByKind046[K] {
  seq046 += 1;
  const rec = {
    id: `${kind}-${seq046}`,
    createdAt: seq046,
    updatedAt: seq046,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq046 },
  };
  return rec as unknown as ByKind046[K];
}

export function createBatch046(count: number): AnyRecord046[] {
  const kinds = ['record-046-0', 'record-046-1', 'record-046-2', 'record-046-3', 'record-046-4', 'record-046-5', 'record-046-6', 'record-046-7', 'record-046-8', 'record-046-9'] as const;
  const out: AnyRecord046[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create046(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
