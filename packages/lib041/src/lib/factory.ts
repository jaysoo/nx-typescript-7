import type { AnyRecord041, RecordKind041, ByKind041 } from './models.js';

let seq041 = 0;

export function create041<K extends RecordKind041>(kind: K, label: string, weight: number): ByKind041[K] {
  seq041 += 1;
  const rec = {
    id: `${kind}-${seq041}`,
    createdAt: seq041,
    updatedAt: seq041,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq041 },
  };
  return rec as unknown as ByKind041[K];
}

export function createBatch041(count: number): AnyRecord041[] {
  const kinds = ['record-041-0', 'record-041-1', 'record-041-2', 'record-041-3', 'record-041-4', 'record-041-5', 'record-041-6', 'record-041-7', 'record-041-8', 'record-041-9'] as const;
  const out: AnyRecord041[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create041(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
