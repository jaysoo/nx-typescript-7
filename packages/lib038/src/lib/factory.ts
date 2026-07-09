import type { AnyRecord038, RecordKind038, ByKind038 } from './models.js';

let seq038 = 0;

export function create038<K extends RecordKind038>(kind: K, label: string, weight: number): ByKind038[K] {
  seq038 += 1;
  const rec = {
    id: `${kind}-${seq038}`,
    createdAt: seq038,
    updatedAt: seq038,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq038 },
  };
  return rec as unknown as ByKind038[K];
}

export function createBatch038(count: number): AnyRecord038[] {
  const kinds = ['record-038-0', 'record-038-1', 'record-038-2', 'record-038-3', 'record-038-4', 'record-038-5', 'record-038-6', 'record-038-7', 'record-038-8', 'record-038-9'] as const;
  const out: AnyRecord038[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create038(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
