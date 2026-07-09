import type { AnyRecord021, RecordKind021, ByKind021 } from './models.js';

let seq021 = 0;

export function create021<K extends RecordKind021>(kind: K, label: string, weight: number): ByKind021[K] {
  seq021 += 1;
  const rec = {
    id: `${kind}-${seq021}`,
    createdAt: seq021,
    updatedAt: seq021,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq021 },
  };
  return rec as unknown as ByKind021[K];
}

export function createBatch021(count: number): AnyRecord021[] {
  const kinds = ['record-021-0', 'record-021-1', 'record-021-2', 'record-021-3', 'record-021-4', 'record-021-5', 'record-021-6', 'record-021-7', 'record-021-8', 'record-021-9'] as const;
  const out: AnyRecord021[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create021(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
