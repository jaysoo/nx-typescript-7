import type { AnyRecord052, ByKind052, Entity052, RecordKind052 } from './models.js';

export function pick052<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind052(records: readonly AnyRecord052[]): Partial<{ [K in RecordKind052]: ByKind052[K][] }> {
  const out: Partial<{ [K in RecordKind052]: ByKind052[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord052[]).push(rec);
  }
  return out;
}

export function totalWeight052(records: readonly AnyRecord052[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch052<T extends Entity052>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries052<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind052<K extends RecordKind052>(rec: AnyRecord052, kind: K): asserts rec is ByKind052[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
