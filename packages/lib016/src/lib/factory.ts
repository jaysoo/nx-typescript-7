import type { AnyRecord016, RecordKind016, ByKind016 } from './models.js';

let seq016 = 0;

export function create016<K extends RecordKind016>(kind: K, label: string, weight: number): ByKind016[K] {
  seq016 += 1;
  const rec = {
    id: `${kind}-${seq016}`,
    createdAt: seq016,
    updatedAt: seq016,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq016 },
  };
  return rec as unknown as ByKind016[K];
}

export function createBatch016(count: number): AnyRecord016[] {
  const kinds = ['record-016-0', 'record-016-1', 'record-016-2', 'record-016-3', 'record-016-4', 'record-016-5', 'record-016-6', 'record-016-7', 'record-016-8', 'record-016-9'] as const;
  const out: AnyRecord016[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create016(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
