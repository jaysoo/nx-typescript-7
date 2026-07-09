import type { AnyRecord034, RecordKind034, ByKind034 } from './models.js';

let seq034 = 0;

export function create034<K extends RecordKind034>(kind: K, label: string, weight: number): ByKind034[K] {
  seq034 += 1;
  const rec = {
    id: `${kind}-${seq034}`,
    createdAt: seq034,
    updatedAt: seq034,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq034 },
  };
  return rec as unknown as ByKind034[K];
}

export function createBatch034(count: number): AnyRecord034[] {
  const kinds = ['record-034-0', 'record-034-1', 'record-034-2', 'record-034-3', 'record-034-4', 'record-034-5', 'record-034-6', 'record-034-7', 'record-034-8', 'record-034-9'] as const;
  const out: AnyRecord034[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create034(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
