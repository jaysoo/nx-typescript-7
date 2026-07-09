import type { AnyRecord060, RecordKind060, ByKind060 } from './models.js';

let seq060 = 0;

export function create060<K extends RecordKind060>(kind: K, label: string, weight: number): ByKind060[K] {
  seq060 += 1;
  const rec = {
    id: `${kind}-${seq060}`,
    createdAt: seq060,
    updatedAt: seq060,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq060 },
  };
  return rec as unknown as ByKind060[K];
}

export function createBatch060(count: number): AnyRecord060[] {
  const kinds = ['record-060-0', 'record-060-1', 'record-060-2', 'record-060-3', 'record-060-4', 'record-060-5', 'record-060-6', 'record-060-7', 'record-060-8', 'record-060-9'] as const;
  const out: AnyRecord060[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create060(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
