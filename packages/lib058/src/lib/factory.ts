import type { AnyRecord058, RecordKind058, ByKind058 } from './models.js';

let seq058 = 0;

export function create058<K extends RecordKind058>(kind: K, label: string, weight: number): ByKind058[K] {
  seq058 += 1;
  const rec = {
    id: `${kind}-${seq058}`,
    createdAt: seq058,
    updatedAt: seq058,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq058 },
  };
  return rec as unknown as ByKind058[K];
}

export function createBatch058(count: number): AnyRecord058[] {
  const kinds = ['record-058-0', 'record-058-1', 'record-058-2', 'record-058-3', 'record-058-4', 'record-058-5', 'record-058-6', 'record-058-7', 'record-058-8', 'record-058-9'] as const;
  const out: AnyRecord058[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create058(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
