import type { AnyRecord071, ByKind071, Entity071, RecordKind071 } from './models.js';

export function pick071<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind071(records: readonly AnyRecord071[]): Partial<{ [K in RecordKind071]: ByKind071[K][] }> {
  const out: Partial<{ [K in RecordKind071]: ByKind071[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord071[]).push(rec);
  }
  return out;
}

export function totalWeight071(records: readonly AnyRecord071[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch071<T extends Entity071>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries071<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind071<K extends RecordKind071>(rec: AnyRecord071, kind: K): asserts rec is ByKind071[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
