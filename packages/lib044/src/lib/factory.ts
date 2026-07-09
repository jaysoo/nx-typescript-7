import type { AnyRecord044, RecordKind044, ByKind044 } from './models.js';

let seq044 = 0;

export function create044<K extends RecordKind044>(kind: K, label: string, weight: number): ByKind044[K] {
  seq044 += 1;
  const rec = {
    id: `${kind}-${seq044}`,
    createdAt: seq044,
    updatedAt: seq044,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq044 },
  };
  return rec as unknown as ByKind044[K];
}

export function createBatch044(count: number): AnyRecord044[] {
  const kinds = ['record-044-0', 'record-044-1', 'record-044-2', 'record-044-3', 'record-044-4', 'record-044-5', 'record-044-6', 'record-044-7', 'record-044-8', 'record-044-9'] as const;
  const out: AnyRecord044[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create044(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
