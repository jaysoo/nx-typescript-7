import type { AnyRecord015, RecordKind015, ByKind015 } from './models.js';

let seq015 = 0;

export function create015<K extends RecordKind015>(kind: K, label: string, weight: number): ByKind015[K] {
  seq015 += 1;
  const rec = {
    id: `${kind}-${seq015}`,
    createdAt: seq015,
    updatedAt: seq015,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq015 },
  };
  return rec as unknown as ByKind015[K];
}

export function createBatch015(count: number): AnyRecord015[] {
  const kinds = ['record-015-0', 'record-015-1', 'record-015-2', 'record-015-3', 'record-015-4', 'record-015-5', 'record-015-6', 'record-015-7', 'record-015-8', 'record-015-9'] as const;
  const out: AnyRecord015[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create015(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
