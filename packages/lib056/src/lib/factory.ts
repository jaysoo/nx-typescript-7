import type { AnyRecord056, RecordKind056, ByKind056 } from './models.js';

let seq056 = 0;

export function create056<K extends RecordKind056>(kind: K, label: string, weight: number): ByKind056[K] {
  seq056 += 1;
  const rec = {
    id: `${kind}-${seq056}`,
    createdAt: seq056,
    updatedAt: seq056,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq056 },
  };
  return rec as unknown as ByKind056[K];
}

export function createBatch056(count: number): AnyRecord056[] {
  const kinds = ['record-056-0', 'record-056-1', 'record-056-2', 'record-056-3', 'record-056-4', 'record-056-5', 'record-056-6', 'record-056-7', 'record-056-8', 'record-056-9'] as const;
  const out: AnyRecord056[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create056(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
