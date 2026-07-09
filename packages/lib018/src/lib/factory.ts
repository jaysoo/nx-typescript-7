import type { AnyRecord018, RecordKind018, ByKind018 } from './models.js';

let seq018 = 0;

export function create018<K extends RecordKind018>(kind: K, label: string, weight: number): ByKind018[K] {
  seq018 += 1;
  const rec = {
    id: `${kind}-${seq018}`,
    createdAt: seq018,
    updatedAt: seq018,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq018 },
  };
  return rec as unknown as ByKind018[K];
}

export function createBatch018(count: number): AnyRecord018[] {
  const kinds = ['record-018-0', 'record-018-1', 'record-018-2', 'record-018-3', 'record-018-4', 'record-018-5', 'record-018-6', 'record-018-7', 'record-018-8', 'record-018-9'] as const;
  const out: AnyRecord018[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create018(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
