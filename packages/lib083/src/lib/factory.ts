import type { AnyRecord083, RecordKind083, ByKind083 } from './models.js';

let seq083 = 0;

export function create083<K extends RecordKind083>(kind: K, label: string, weight: number): ByKind083[K] {
  seq083 += 1;
  const rec = {
    id: `${kind}-${seq083}`,
    createdAt: seq083,
    updatedAt: seq083,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq083 },
  };
  return rec as unknown as ByKind083[K];
}

export function createBatch083(count: number): AnyRecord083[] {
  const kinds = ['record-083-0', 'record-083-1', 'record-083-2', 'record-083-3', 'record-083-4', 'record-083-5', 'record-083-6', 'record-083-7', 'record-083-8', 'record-083-9'] as const;
  const out: AnyRecord083[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create083(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
