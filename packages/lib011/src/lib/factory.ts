import type { AnyRecord011, RecordKind011, ByKind011 } from './models.js';

let seq011 = 0;

export function create011<K extends RecordKind011>(kind: K, label: string, weight: number): ByKind011[K] {
  seq011 += 1;
  const rec = {
    id: `${kind}-${seq011}`,
    createdAt: seq011,
    updatedAt: seq011,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq011 },
  };
  return rec as unknown as ByKind011[K];
}

export function createBatch011(count: number): AnyRecord011[] {
  const kinds = ['record-011-0', 'record-011-1', 'record-011-2', 'record-011-3', 'record-011-4', 'record-011-5', 'record-011-6', 'record-011-7', 'record-011-8', 'record-011-9'] as const;
  const out: AnyRecord011[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create011(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
