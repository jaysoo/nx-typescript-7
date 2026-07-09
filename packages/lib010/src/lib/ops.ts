import type { AnyRecord010, ByKind010, Entity010, RecordKind010 } from './models.js';

export function pick010<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind010(records: readonly AnyRecord010[]): Partial<{ [K in RecordKind010]: ByKind010[K][] }> {
  const out: Partial<{ [K in RecordKind010]: ByKind010[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord010[]).push(rec);
  }
  return out;
}

export function totalWeight010(records: readonly AnyRecord010[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch010<T extends Entity010>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries010<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind010<K extends RecordKind010>(rec: AnyRecord010, kind: K): asserts rec is ByKind010[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
