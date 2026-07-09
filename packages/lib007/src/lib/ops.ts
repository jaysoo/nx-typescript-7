import type { AnyRecord007, ByKind007, Entity007, RecordKind007 } from './models.js';

export function pick007<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind007(records: readonly AnyRecord007[]): Partial<{ [K in RecordKind007]: ByKind007[K][] }> {
  const out: Partial<{ [K in RecordKind007]: ByKind007[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord007[]).push(rec);
  }
  return out;
}

export function totalWeight007(records: readonly AnyRecord007[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch007<T extends Entity007>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries007<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind007<K extends RecordKind007>(rec: AnyRecord007, kind: K): asserts rec is ByKind007[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
