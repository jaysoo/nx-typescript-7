import type { AnyRecord067, RecordKind067, ByKind067 } from './models.js';

let seq067 = 0;

export function create067<K extends RecordKind067>(kind: K, label: string, weight: number): ByKind067[K] {
  seq067 += 1;
  const rec = {
    id: `${kind}-${seq067}`,
    createdAt: seq067,
    updatedAt: seq067,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq067 },
  };
  return rec as unknown as ByKind067[K];
}

export function createBatch067(count: number): AnyRecord067[] {
  const kinds = ['record-067-0', 'record-067-1', 'record-067-2', 'record-067-3', 'record-067-4', 'record-067-5', 'record-067-6', 'record-067-7', 'record-067-8', 'record-067-9'] as const;
  const out: AnyRecord067[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create067(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
