import type { AnyRecord080, ByKind080, Entity080, RecordKind080 } from './models.js';

export function pick080<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind080(records: readonly AnyRecord080[]): Partial<{ [K in RecordKind080]: ByKind080[K][] }> {
  const out: Partial<{ [K in RecordKind080]: ByKind080[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord080[]).push(rec);
  }
  return out;
}

export function totalWeight080(records: readonly AnyRecord080[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch080<T extends Entity080>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries080<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind080<K extends RecordKind080>(rec: AnyRecord080, kind: K): asserts rec is ByKind080[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
