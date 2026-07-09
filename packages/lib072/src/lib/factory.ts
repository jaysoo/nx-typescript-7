import type { AnyRecord072, RecordKind072, ByKind072 } from './models.js';

let seq072 = 0;

export function create072<K extends RecordKind072>(kind: K, label: string, weight: number): ByKind072[K] {
  seq072 += 1;
  const rec = {
    id: `${kind}-${seq072}`,
    createdAt: seq072,
    updatedAt: seq072,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq072 },
  };
  return rec as unknown as ByKind072[K];
}

export function createBatch072(count: number): AnyRecord072[] {
  const kinds = ['record-072-0', 'record-072-1', 'record-072-2', 'record-072-3', 'record-072-4', 'record-072-5', 'record-072-6', 'record-072-7', 'record-072-8', 'record-072-9'] as const;
  const out: AnyRecord072[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create072(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
