import type { AnyRecord042, RecordKind042, ByKind042 } from './models.js';

let seq042 = 0;

export function create042<K extends RecordKind042>(kind: K, label: string, weight: number): ByKind042[K] {
  seq042 += 1;
  const rec = {
    id: `${kind}-${seq042}`,
    createdAt: seq042,
    updatedAt: seq042,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq042 },
  };
  return rec as unknown as ByKind042[K];
}

export function createBatch042(count: number): AnyRecord042[] {
  const kinds = ['record-042-0', 'record-042-1', 'record-042-2', 'record-042-3', 'record-042-4', 'record-042-5', 'record-042-6', 'record-042-7', 'record-042-8', 'record-042-9'] as const;
  const out: AnyRecord042[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create042(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
