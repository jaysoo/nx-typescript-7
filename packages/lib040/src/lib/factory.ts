import type { AnyRecord040, RecordKind040, ByKind040 } from './models.js';

let seq040 = 0;

export function create040<K extends RecordKind040>(kind: K, label: string, weight: number): ByKind040[K] {
  seq040 += 1;
  const rec = {
    id: `${kind}-${seq040}`,
    createdAt: seq040,
    updatedAt: seq040,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq040 },
  };
  return rec as unknown as ByKind040[K];
}

export function createBatch040(count: number): AnyRecord040[] {
  const kinds = ['record-040-0', 'record-040-1', 'record-040-2', 'record-040-3', 'record-040-4', 'record-040-5', 'record-040-6', 'record-040-7', 'record-040-8', 'record-040-9'] as const;
  const out: AnyRecord040[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create040(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
