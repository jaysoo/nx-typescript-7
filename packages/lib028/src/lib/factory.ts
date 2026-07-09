import type { AnyRecord028, RecordKind028, ByKind028 } from './models.js';

let seq028 = 0;

export function create028<K extends RecordKind028>(kind: K, label: string, weight: number): ByKind028[K] {
  seq028 += 1;
  const rec = {
    id: `${kind}-${seq028}`,
    createdAt: seq028,
    updatedAt: seq028,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq028 },
  };
  return rec as unknown as ByKind028[K];
}

export function createBatch028(count: number): AnyRecord028[] {
  const kinds = ['record-028-0', 'record-028-1', 'record-028-2', 'record-028-3', 'record-028-4', 'record-028-5', 'record-028-6', 'record-028-7', 'record-028-8', 'record-028-9'] as const;
  const out: AnyRecord028[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create028(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
