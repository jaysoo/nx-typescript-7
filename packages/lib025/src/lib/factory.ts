import type { AnyRecord025, RecordKind025, ByKind025 } from './models.js';

let seq025 = 0;

export function create025<K extends RecordKind025>(kind: K, label: string, weight: number): ByKind025[K] {
  seq025 += 1;
  const rec = {
    id: `${kind}-${seq025}`,
    createdAt: seq025,
    updatedAt: seq025,
    revision: 1,
    kind,
    label,
    weight,
    tags: [label],
    attrs: { seq: seq025 },
  };
  return rec as unknown as ByKind025[K];
}

export function createBatch025(count: number): AnyRecord025[] {
  const kinds = ['record-025-0', 'record-025-1', 'record-025-2', 'record-025-3', 'record-025-4', 'record-025-5', 'record-025-6', 'record-025-7', 'record-025-8', 'record-025-9'] as const;
  const out: AnyRecord025[] = [];
  for (let idx = 0; idx < count; idx++) {
    out.push(create025(kinds[idx % kinds.length], `item-${idx}`, idx * 0.5));
  }
  return out;
}
