import type { AnyRecord047, ByKind047, Entity047, RecordKind047 } from './models.js';

export function pick047<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind047(records: readonly AnyRecord047[]): Partial<{ [K in RecordKind047]: ByKind047[K][] }> {
  const out: Partial<{ [K in RecordKind047]: ByKind047[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord047[]).push(rec);
  }
  return out;
}

export function totalWeight047(records: readonly AnyRecord047[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch047<T extends Entity047>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries047<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind047<K extends RecordKind047>(rec: AnyRecord047, kind: K): asserts rec is ByKind047[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
