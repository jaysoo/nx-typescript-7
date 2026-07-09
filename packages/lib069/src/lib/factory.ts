import type { AnyRecord069, RecordKind069, ByKind069 } from './models.js';

let seq069 = 0;

export function create069<K extends RecordKind069>(kind: K, label: string, weight: number): ByKind069[K] {
  seq069 += 1;
  const rec = {
    id: `${kind}-${seq069}`,
    createdAt: seq069,
    updatedAt: seq069,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq069 },
  };
  return rec as unknown as ByKind069[K];
}

export function createBatch069(count: number): AnyRecord069[] {
  const kinds = ['record-069-0', 'record-069-1', 'record-069-2', 'record-069-3', 'record-069-4', 'record-069-5', 'record-069-6', 'record-069-7', 'record-069-8', 'record-069-9'] as const;
  const out: AnyRecord069[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create069(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
