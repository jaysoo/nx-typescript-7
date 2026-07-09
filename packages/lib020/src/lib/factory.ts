import type { AnyRecord020, RecordKind020, ByKind020 } from './models.js';

let seq020 = 0;

export function create020<K extends RecordKind020>(kind: K, label: string, weight: number): ByKind020[K] {
  seq020 += 1;
  const rec = {
    id: `${kind}-${seq020}`,
    createdAt: seq020,
    updatedAt: seq020,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq020 },
  };
  return rec as unknown as ByKind020[K];
}

export function createBatch020(count: number): AnyRecord020[] {
  const kinds = ['record-020-0', 'record-020-1', 'record-020-2', 'record-020-3', 'record-020-4', 'record-020-5', 'record-020-6', 'record-020-7', 'record-020-8', 'record-020-9'] as const;
  const out: AnyRecord020[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create020(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
