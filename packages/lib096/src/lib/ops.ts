import type { AnyRecord096, ByKind096, Entity096, RecordKind096 } from './models.js';

export function pick096<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind096(records: readonly AnyRecord096[]): Partial<{ [K in RecordKind096]: ByKind096[K][] }> {
  const out: Partial<{ [K in RecordKind096]: ByKind096[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord096[]).push(rec);
  }
  return out;
}

export function totalWeight096(records: readonly AnyRecord096[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch096<T extends Entity096>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries096<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind096<K extends RecordKind096>(rec: AnyRecord096, kind: K): asserts rec is ByKind096[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
