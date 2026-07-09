import type { AnyRecord002, RecordKind002, ByKind002 } from './models.js';

let seq002 = 0;

export function create002<K extends RecordKind002>(kind: K, label: string, weight: number): ByKind002[K] {
  seq002 += 1;
  const rec = {
    id: `${kind}-${seq002}`,
    createdAt: seq002,
    updatedAt: seq002,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq002 },
  };
  return rec as unknown as ByKind002[K];
}

export function createBatch002(count: number): AnyRecord002[] {
  const kinds = ['record-002-0', 'record-002-1', 'record-002-2', 'record-002-3', 'record-002-4', 'record-002-5', 'record-002-6', 'record-002-7', 'record-002-8', 'record-002-9'] as const;
  const out: AnyRecord002[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create002(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
