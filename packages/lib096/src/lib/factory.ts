import type { AnyRecord096, RecordKind096, ByKind096 } from './models.js';

let seq096 = 0;

export function create096<K extends RecordKind096>(kind: K, label: string, weight: number): ByKind096[K] {
  seq096 += 1;
  const rec = {
    id: `${kind}-${seq096}`,
    createdAt: seq096,
    updatedAt: seq096,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq096 },
  };
  return rec as unknown as ByKind096[K];
}

export function createBatch096(count: number): AnyRecord096[] {
  const kinds = ['record-096-0', 'record-096-1', 'record-096-2', 'record-096-3', 'record-096-4', 'record-096-5', 'record-096-6', 'record-096-7', 'record-096-8', 'record-096-9'] as const;
  const out: AnyRecord096[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create096(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
