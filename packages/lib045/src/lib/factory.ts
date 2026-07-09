import type { AnyRecord045, RecordKind045, ByKind045 } from './models.js';

let seq045 = 0;

export function create045<K extends RecordKind045>(kind: K, label: string, weight: number): ByKind045[K] {
  seq045 += 1;
  const rec = {
    id: `${kind}-${seq045}`,
    createdAt: seq045,
    updatedAt: seq045,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq045 },
  };
  return rec as unknown as ByKind045[K];
}

export function createBatch045(count: number): AnyRecord045[] {
  const kinds = ['record-045-0', 'record-045-1', 'record-045-2', 'record-045-3', 'record-045-4', 'record-045-5', 'record-045-6', 'record-045-7', 'record-045-8', 'record-045-9'] as const;
  const out: AnyRecord045[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create045(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
