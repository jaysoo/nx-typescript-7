import type { AnyRecord084, RecordKind084, ByKind084 } from './models.js';

let seq084 = 0;

export function create084<K extends RecordKind084>(kind: K, label: string, weight: number): ByKind084[K] {
  seq084 += 1;
  const rec = {
    id: `${kind}-${seq084}`,
    createdAt: seq084,
    updatedAt: seq084,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq084 },
  };
  return rec as unknown as ByKind084[K];
}

export function createBatch084(count: number): AnyRecord084[] {
  const kinds = ['record-084-0', 'record-084-1', 'record-084-2', 'record-084-3', 'record-084-4', 'record-084-5', 'record-084-6', 'record-084-7', 'record-084-8', 'record-084-9'] as const;
  const out: AnyRecord084[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create084(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
