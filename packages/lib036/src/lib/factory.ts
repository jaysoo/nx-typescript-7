import type { AnyRecord036, RecordKind036, ByKind036 } from './models.js';

let seq036 = 0;

export function create036<K extends RecordKind036>(kind: K, label: string, weight: number): ByKind036[K] {
  seq036 += 1;
  const rec = {
    id: `${kind}-${seq036}`,
    createdAt: seq036,
    updatedAt: seq036,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq036 },
  };
  return rec as unknown as ByKind036[K];
}

export function createBatch036(count: number): AnyRecord036[] {
  const kinds = ['record-036-0', 'record-036-1', 'record-036-2', 'record-036-3', 'record-036-4', 'record-036-5', 'record-036-6', 'record-036-7', 'record-036-8', 'record-036-9'] as const;
  const out: AnyRecord036[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create036(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
