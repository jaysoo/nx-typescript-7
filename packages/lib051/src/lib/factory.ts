import type { AnyRecord051, RecordKind051, ByKind051 } from './models.js';

let seq051 = 0;

export function create051<K extends RecordKind051>(kind: K, label: string, weight: number): ByKind051[K] {
  seq051 += 1;
  const rec = {
    id: `${kind}-${seq051}`,
    createdAt: seq051,
    updatedAt: seq051,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq051 },
  };
  return rec as unknown as ByKind051[K];
}

export function createBatch051(count: number): AnyRecord051[] {
  const kinds = ['record-051-0', 'record-051-1', 'record-051-2', 'record-051-3', 'record-051-4', 'record-051-5', 'record-051-6', 'record-051-7', 'record-051-8', 'record-051-9'] as const;
  const out: AnyRecord051[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create051(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
