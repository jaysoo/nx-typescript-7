import type { AnyRecord053, ByKind053, Entity053, RecordKind053 } from './models.js';

export function pick053<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind053(records: readonly AnyRecord053[]): Partial<{ [K in RecordKind053]: ByKind053[K][] }> {
  const out: Partial<{ [K in RecordKind053]: ByKind053[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord053[]).push(rec);
  }
  return out;
}

export function totalWeight053(records: readonly AnyRecord053[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch053<T extends Entity053>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries053<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind053<K extends RecordKind053>(rec: AnyRecord053, kind: K): asserts rec is ByKind053[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
