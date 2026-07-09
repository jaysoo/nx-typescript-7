import type { AnyRecord076, RecordKind076, ByKind076 } from './models.js';

let seq076 = 0;

export function create076<K extends RecordKind076>(kind: K, label: string, weight: number): ByKind076[K] {
  seq076 += 1;
  const rec = {
    id: `${kind}-${seq076}`,
    createdAt: seq076,
    updatedAt: seq076,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq076 },
  };
  return rec as unknown as ByKind076[K];
}

export function createBatch076(count: number): AnyRecord076[] {
  const kinds = ['record-076-0', 'record-076-1', 'record-076-2', 'record-076-3', 'record-076-4', 'record-076-5', 'record-076-6', 'record-076-7', 'record-076-8', 'record-076-9'] as const;
  const out: AnyRecord076[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create076(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
