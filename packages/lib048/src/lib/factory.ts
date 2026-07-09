import type { AnyRecord048, RecordKind048, ByKind048 } from './models.js';

let seq048 = 0;

export function create048<K extends RecordKind048>(kind: K, label: string, weight: number): ByKind048[K] {
  seq048 += 1;
  const rec = {
    id: `${kind}-${seq048}`,
    createdAt: seq048,
    updatedAt: seq048,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq048 },
  };
  return rec as unknown as ByKind048[K];
}

export function createBatch048(count: number): AnyRecord048[] {
  const kinds = ['record-048-0', 'record-048-1', 'record-048-2', 'record-048-3', 'record-048-4', 'record-048-5', 'record-048-6', 'record-048-7', 'record-048-8', 'record-048-9'] as const;
  const out: AnyRecord048[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create048(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
