import type { AnyRecord077, RecordKind077, ByKind077 } from './models.js';

let seq077 = 0;

export function create077<K extends RecordKind077>(kind: K, label: string, weight: number): ByKind077[K] {
  seq077 += 1;
  const rec = {
    id: `${kind}-${seq077}`,
    createdAt: seq077,
    updatedAt: seq077,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq077 },
  };
  return rec as unknown as ByKind077[K];
}

export function createBatch077(count: number): AnyRecord077[] {
  const kinds = ['record-077-0', 'record-077-1', 'record-077-2', 'record-077-3', 'record-077-4', 'record-077-5', 'record-077-6', 'record-077-7', 'record-077-8', 'record-077-9'] as const;
  const out: AnyRecord077[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create077(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
