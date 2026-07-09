import type { AnyRecord098, RecordKind098, ByKind098 } from './models.js';

let seq098 = 0;

export function create098<K extends RecordKind098>(kind: K, label: string, weight: number): ByKind098[K] {
  seq098 += 1;
  const rec = {
    id: `${kind}-${seq098}`,
    createdAt: seq098,
    updatedAt: seq098,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq098 },
  };
  return rec as unknown as ByKind098[K];
}

export function createBatch098(count: number): AnyRecord098[] {
  const kinds = ['record-098-0', 'record-098-1', 'record-098-2', 'record-098-3', 'record-098-4', 'record-098-5', 'record-098-6', 'record-098-7', 'record-098-8', 'record-098-9'] as const;
  const out: AnyRecord098[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create098(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
