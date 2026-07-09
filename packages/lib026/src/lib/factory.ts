import type { AnyRecord026, RecordKind026, ByKind026 } from './models.js';

let seq026 = 0;

export function create026<K extends RecordKind026>(kind: K, label: string, weight: number): ByKind026[K] {
  seq026 += 1;
  const rec = {
    id: `${kind}-${seq026}`,
    createdAt: seq026,
    updatedAt: seq026,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq026 },
  };
  return rec as unknown as ByKind026[K];
}

export function createBatch026(count: number): AnyRecord026[] {
  const kinds = ['record-026-0', 'record-026-1', 'record-026-2', 'record-026-3', 'record-026-4', 'record-026-5', 'record-026-6', 'record-026-7', 'record-026-8', 'record-026-9'] as const;
  const out: AnyRecord026[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create026(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
