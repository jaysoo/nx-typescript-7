import type { AnyRecord092, RecordKind092, ByKind092 } from './models.js';

let seq092 = 0;

export function create092<K extends RecordKind092>(kind: K, label: string, weight: number): ByKind092[K] {
  seq092 += 1;
  const rec = {
    id: `${kind}-${seq092}`,
    createdAt: seq092,
    updatedAt: seq092,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq092 },
  };
  return rec as unknown as ByKind092[K];
}

export function createBatch092(count: number): AnyRecord092[] {
  const kinds = ['record-092-0', 'record-092-1', 'record-092-2', 'record-092-3', 'record-092-4', 'record-092-5', 'record-092-6', 'record-092-7', 'record-092-8', 'record-092-9'] as const;
  const out: AnyRecord092[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create092(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
