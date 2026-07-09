import type { AnyRecord077, ByKind077, Entity077, RecordKind077 } from './models.js';

export function pick077<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind077(records: readonly AnyRecord077[]): Partial<{ [K in RecordKind077]: ByKind077[K][] }> {
  const out: Partial<{ [K in RecordKind077]: ByKind077[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord077[]).push(rec);
  }
  return out;
}

export function totalWeight077(records: readonly AnyRecord077[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch077<T extends Entity077>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries077<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind077<K extends RecordKind077>(rec: AnyRecord077, kind: K): asserts rec is ByKind077[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
