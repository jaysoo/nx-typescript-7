import type { AnyRecord055, RecordKind055, ByKind055 } from './models.js';

let seq055 = 0;

export function create055<K extends RecordKind055>(kind: K, label: string, weight: number): ByKind055[K] {
  seq055 += 1;
  const rec = {
    id: `${kind}-${seq055}`,
    createdAt: seq055,
    updatedAt: seq055,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq055 },
  };
  return rec as unknown as ByKind055[K];
}

export function createBatch055(count: number): AnyRecord055[] {
  const kinds = ['record-055-0', 'record-055-1', 'record-055-2', 'record-055-3', 'record-055-4', 'record-055-5', 'record-055-6', 'record-055-7', 'record-055-8', 'record-055-9'] as const;
  const out: AnyRecord055[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create055(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
