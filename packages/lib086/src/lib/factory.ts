import type { AnyRecord086, RecordKind086, ByKind086 } from './models.js';

let seq086 = 0;

export function create086<K extends RecordKind086>(kind: K, label: string, weight: number): ByKind086[K] {
  seq086 += 1;
  const rec = {
    id: `${kind}-${seq086}`,
    createdAt: seq086,
    updatedAt: seq086,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq086 },
  };
  return rec as unknown as ByKind086[K];
}

export function createBatch086(count: number): AnyRecord086[] {
  const kinds = ['record-086-0', 'record-086-1', 'record-086-2', 'record-086-3', 'record-086-4', 'record-086-5', 'record-086-6', 'record-086-7', 'record-086-8', 'record-086-9'] as const;
  const out: AnyRecord086[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create086(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
