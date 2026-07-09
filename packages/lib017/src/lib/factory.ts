import type { AnyRecord017, RecordKind017, ByKind017 } from './models.js';

let seq017 = 0;

export function create017<K extends RecordKind017>(kind: K, label: string, weight: number): ByKind017[K] {
  seq017 += 1;
  const rec = {
    id: `${kind}-${seq017}`,
    createdAt: seq017,
    updatedAt: seq017,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq017 },
  };
  return rec as unknown as ByKind017[K];
}

export function createBatch017(count: number): AnyRecord017[] {
  const kinds = ['record-017-0', 'record-017-1', 'record-017-2', 'record-017-3', 'record-017-4', 'record-017-5', 'record-017-6', 'record-017-7', 'record-017-8', 'record-017-9'] as const;
  const out: AnyRecord017[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create017(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
