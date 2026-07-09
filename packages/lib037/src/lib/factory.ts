import type { AnyRecord037, RecordKind037, ByKind037 } from './models.js';

let seq037 = 0;

export function create037<K extends RecordKind037>(kind: K, label: string, weight: number): ByKind037[K] {
  seq037 += 1;
  const rec = {
    id: `${kind}-${seq037}`,
    createdAt: seq037,
    updatedAt: seq037,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq037 },
  };
  return rec as unknown as ByKind037[K];
}

export function createBatch037(count: number): AnyRecord037[] {
  const kinds = ['record-037-0', 'record-037-1', 'record-037-2', 'record-037-3', 'record-037-4', 'record-037-5', 'record-037-6', 'record-037-7', 'record-037-8', 'record-037-9'] as const;
  const out: AnyRecord037[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create037(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
