import type { AnyRecord090, RecordKind090, ByKind090 } from './models.js';

let seq090 = 0;

export function create090<K extends RecordKind090>(kind: K, label: string, weight: number): ByKind090[K] {
  seq090 += 1;
  const rec = {
    id: `${kind}-${seq090}`,
    createdAt: seq090,
    updatedAt: seq090,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq090 },
  };
  return rec as unknown as ByKind090[K];
}

export function createBatch090(count: number): AnyRecord090[] {
  const kinds = ['record-090-0', 'record-090-1', 'record-090-2', 'record-090-3', 'record-090-4', 'record-090-5', 'record-090-6', 'record-090-7', 'record-090-8', 'record-090-9'] as const;
  const out: AnyRecord090[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create090(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
