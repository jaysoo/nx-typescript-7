import type { AnyRecord033, RecordKind033, ByKind033 } from './models.js';

let seq033 = 0;

export function create033<K extends RecordKind033>(kind: K, label: string, weight: number): ByKind033[K] {
  seq033 += 1;
  const rec = {
    id: `${kind}-${seq033}`,
    createdAt: seq033,
    updatedAt: seq033,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq033 },
  };
  return rec as unknown as ByKind033[K];
}

export function createBatch033(count: number): AnyRecord033[] {
  const kinds = ['record-033-0', 'record-033-1', 'record-033-2', 'record-033-3', 'record-033-4', 'record-033-5', 'record-033-6', 'record-033-7', 'record-033-8', 'record-033-9'] as const;
  const out: AnyRecord033[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create033(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
