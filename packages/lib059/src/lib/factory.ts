import type { AnyRecord059, RecordKind059, ByKind059 } from './models.js';

let seq059 = 0;

export function create059<K extends RecordKind059>(kind: K, label: string, weight: number): ByKind059[K] {
  seq059 += 1;
  const rec = {
    id: `${kind}-${seq059}`,
    createdAt: seq059,
    updatedAt: seq059,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq059 },
  };
  return rec as unknown as ByKind059[K];
}

export function createBatch059(count: number): AnyRecord059[] {
  const kinds = ['record-059-0', 'record-059-1', 'record-059-2', 'record-059-3', 'record-059-4', 'record-059-5', 'record-059-6', 'record-059-7', 'record-059-8', 'record-059-9'] as const;
  const out: AnyRecord059[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create059(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
