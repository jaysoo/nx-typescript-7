import type { AnyRecord070, RecordKind070, ByKind070 } from './models.js';

let seq070 = 0;

export function create070<K extends RecordKind070>(kind: K, label: string, weight: number): ByKind070[K] {
  seq070 += 1;
  const rec = {
    id: `${kind}-${seq070}`,
    createdAt: seq070,
    updatedAt: seq070,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq070 },
  };
  return rec as unknown as ByKind070[K];
}

export function createBatch070(count: number): AnyRecord070[] {
  const kinds = ['record-070-0', 'record-070-1', 'record-070-2', 'record-070-3', 'record-070-4', 'record-070-5', 'record-070-6', 'record-070-7', 'record-070-8', 'record-070-9'] as const;
  const out: AnyRecord070[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create070(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
