import type { AnyRecord062, RecordKind062, ByKind062 } from './models.js';

let seq062 = 0;

export function create062<K extends RecordKind062>(kind: K, label: string, weight: number): ByKind062[K] {
  seq062 += 1;
  const rec = {
    id: `${kind}-${seq062}`,
    createdAt: seq062,
    updatedAt: seq062,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq062 },
  };
  return rec as unknown as ByKind062[K];
}

export function createBatch062(count: number): AnyRecord062[] {
  const kinds = ['record-062-0', 'record-062-1', 'record-062-2', 'record-062-3', 'record-062-4', 'record-062-5', 'record-062-6', 'record-062-7', 'record-062-8', 'record-062-9'] as const;
  const out: AnyRecord062[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create062(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
