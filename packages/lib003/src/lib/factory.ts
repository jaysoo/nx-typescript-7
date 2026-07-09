import type { AnyRecord003, RecordKind003, ByKind003 } from './models.js';

let seq003 = 0;

export function create003<K extends RecordKind003>(kind: K, label: string, weight: number): ByKind003[K] {
  seq003 += 1;
  const rec = {
    id: `${kind}-${seq003}`,
    createdAt: seq003,
    updatedAt: seq003,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq003 },
  };
  return rec as unknown as ByKind003[K];
}

export function createBatch003(count: number): AnyRecord003[] {
  const kinds = ['record-003-0', 'record-003-1', 'record-003-2', 'record-003-3', 'record-003-4', 'record-003-5', 'record-003-6', 'record-003-7', 'record-003-8', 'record-003-9'] as const;
  const out: AnyRecord003[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create003(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
