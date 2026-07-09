import type { AnyRecord014, RecordKind014, ByKind014 } from './models.js';

let seq014 = 0;

export function create014<K extends RecordKind014>(kind: K, label: string, weight: number): ByKind014[K] {
  seq014 += 1;
  const rec = {
    id: `${kind}-${seq014}`,
    createdAt: seq014,
    updatedAt: seq014,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq014 },
  };
  return rec as unknown as ByKind014[K];
}

export function createBatch014(count: number): AnyRecord014[] {
  const kinds = ['record-014-0', 'record-014-1', 'record-014-2', 'record-014-3', 'record-014-4', 'record-014-5', 'record-014-6', 'record-014-7', 'record-014-8', 'record-014-9'] as const;
  const out: AnyRecord014[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create014(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
