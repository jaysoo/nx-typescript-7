import type { AnyRecord064, RecordKind064, ByKind064 } from './models.js';

let seq064 = 0;

export function create064<K extends RecordKind064>(kind: K, label: string, weight: number): ByKind064[K] {
  seq064 += 1;
  const rec = {
    id: `${kind}-${seq064}`,
    createdAt: seq064,
    updatedAt: seq064,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq064 },
  };
  return rec as unknown as ByKind064[K];
}

export function createBatch064(count: number): AnyRecord064[] {
  const kinds = ['record-064-0', 'record-064-1', 'record-064-2', 'record-064-3', 'record-064-4', 'record-064-5', 'record-064-6', 'record-064-7', 'record-064-8', 'record-064-9'] as const;
  const out: AnyRecord064[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create064(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
