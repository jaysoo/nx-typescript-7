import type { AnyRecord079, RecordKind079, ByKind079 } from './models.js';

let seq079 = 0;

export function create079<K extends RecordKind079>(kind: K, label: string, weight: number): ByKind079[K] {
  seq079 += 1;
  const rec = {
    id: `${kind}-${seq079}`,
    createdAt: seq079,
    updatedAt: seq079,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq079 },
  };
  return rec as unknown as ByKind079[K];
}

export function createBatch079(count: number): AnyRecord079[] {
  const kinds = ['record-079-0', 'record-079-1', 'record-079-2', 'record-079-3', 'record-079-4', 'record-079-5', 'record-079-6', 'record-079-7', 'record-079-8', 'record-079-9'] as const;
  const out: AnyRecord079[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create079(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
