import type { AnyRecord061, RecordKind061, ByKind061 } from './models.js';

let seq061 = 0;

export function create061<K extends RecordKind061>(kind: K, label: string, weight: number): ByKind061[K] {
  seq061 += 1;
  const rec = {
    id: `${kind}-${seq061}`,
    createdAt: seq061,
    updatedAt: seq061,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq061 },
  };
  return rec as unknown as ByKind061[K];
}

export function createBatch061(count: number): AnyRecord061[] {
  const kinds = ['record-061-0', 'record-061-1', 'record-061-2', 'record-061-3', 'record-061-4', 'record-061-5', 'record-061-6', 'record-061-7', 'record-061-8', 'record-061-9'] as const;
  const out: AnyRecord061[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create061(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
