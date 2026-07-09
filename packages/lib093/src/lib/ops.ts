import type { AnyRecord093, ByKind093, Entity093, RecordKind093 } from './models.js';

export function pick093<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind093(records: readonly AnyRecord093[]): Partial<{ [K in RecordKind093]: ByKind093[K][] }> {
  const out: Partial<{ [K in RecordKind093]: ByKind093[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord093[]).push(rec);
  }
  return out;
}

export function totalWeight093(records: readonly AnyRecord093[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch093<T extends Entity093>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries093<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind093<K extends RecordKind093>(rec: AnyRecord093, kind: K): asserts rec is ByKind093[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
