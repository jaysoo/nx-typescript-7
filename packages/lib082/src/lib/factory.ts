import type { AnyRecord082, RecordKind082, ByKind082 } from './models.js';

let seq082 = 0;

export function create082<K extends RecordKind082>(kind: K, label: string, weight: number): ByKind082[K] {
  seq082 += 1;
  const rec = {
    id: `${kind}-${seq082}`,
    createdAt: seq082,
    updatedAt: seq082,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq082 },
  };
  return rec as unknown as ByKind082[K];
}

export function createBatch082(count: number): AnyRecord082[] {
  const kinds = ['record-082-0', 'record-082-1', 'record-082-2', 'record-082-3', 'record-082-4', 'record-082-5', 'record-082-6', 'record-082-7', 'record-082-8', 'record-082-9'] as const;
  const out: AnyRecord082[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create082(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
