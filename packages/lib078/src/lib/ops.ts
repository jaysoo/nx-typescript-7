import type { AnyRecord078, ByKind078, Entity078, RecordKind078 } from './models.js';

export function pick078<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind078(records: readonly AnyRecord078[]): Partial<{ [K in RecordKind078]: ByKind078[K][] }> {
  const out: Partial<{ [K in RecordKind078]: ByKind078[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord078[]).push(rec);
  }
  return out;
}

export function totalWeight078(records: readonly AnyRecord078[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch078<T extends Entity078>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries078<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind078<K extends RecordKind078>(rec: AnyRecord078, kind: K): asserts rec is ByKind078[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
