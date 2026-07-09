import type { AnyRecord087, RecordKind087, ByKind087 } from './models.js';

let seq087 = 0;

export function create087<K extends RecordKind087>(kind: K, label: string, weight: number): ByKind087[K] {
  seq087 += 1;
  const rec = {
    id: `${kind}-${seq087}`,
    createdAt: seq087,
    updatedAt: seq087,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq087 },
  };
  return rec as unknown as ByKind087[K];
}

export function createBatch087(count: number): AnyRecord087[] {
  const kinds = ['record-087-0', 'record-087-1', 'record-087-2', 'record-087-3', 'record-087-4', 'record-087-5', 'record-087-6', 'record-087-7', 'record-087-8', 'record-087-9'] as const;
  const out: AnyRecord087[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create087(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
