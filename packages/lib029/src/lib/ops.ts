import type { AnyRecord029, ByKind029, Entity029, RecordKind029 } from './models.js';

export function pick029<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind029(records: readonly AnyRecord029[]): Partial<{ [K in RecordKind029]: ByKind029[K][] }> {
  const out: Partial<{ [K in RecordKind029]: ByKind029[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord029[]).push(rec);
  }
  return out;
}

export function totalWeight029(records: readonly AnyRecord029[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch029<T extends Entity029>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries029<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind029<K extends RecordKind029>(rec: AnyRecord029, kind: K): asserts rec is ByKind029[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
