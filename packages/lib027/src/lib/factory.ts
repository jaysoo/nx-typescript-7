import type { AnyRecord027, RecordKind027, ByKind027 } from './models.js';

let seq027 = 0;

export function create027<K extends RecordKind027>(kind: K, label: string, weight: number): ByKind027[K] {
  seq027 += 1;
  const rec = {
    id: `${kind}-${seq027}`,
    createdAt: seq027,
    updatedAt: seq027,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq027 },
  };
  return rec as unknown as ByKind027[K];
}

export function createBatch027(count: number): AnyRecord027[] {
  const kinds = ['record-027-0', 'record-027-1', 'record-027-2', 'record-027-3', 'record-027-4', 'record-027-5', 'record-027-6', 'record-027-7', 'record-027-8', 'record-027-9'] as const;
  const out: AnyRecord027[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create027(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
