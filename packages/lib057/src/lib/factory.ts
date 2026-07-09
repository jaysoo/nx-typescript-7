import type { AnyRecord057, RecordKind057, ByKind057 } from './models.js';

let seq057 = 0;

export function create057<K extends RecordKind057>(kind: K, label: string, weight: number): ByKind057[K] {
  seq057 += 1;
  const rec = {
    id: `${kind}-${seq057}`,
    createdAt: seq057,
    updatedAt: seq057,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq057 },
  };
  return rec as unknown as ByKind057[K];
}

export function createBatch057(count: number): AnyRecord057[] {
  const kinds = ['record-057-0', 'record-057-1', 'record-057-2', 'record-057-3', 'record-057-4', 'record-057-5', 'record-057-6', 'record-057-7', 'record-057-8', 'record-057-9'] as const;
  const out: AnyRecord057[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create057(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
