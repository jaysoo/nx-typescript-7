import type { AnyRecord050, ByKind050, Entity050, RecordKind050 } from './models.js';

export function pick050<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind050(records: readonly AnyRecord050[]): Partial<{ [K in RecordKind050]: ByKind050[K][] }> {
  const out: Partial<{ [K in RecordKind050]: ByKind050[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord050[]).push(rec);
  }
  return out;
}

export function totalWeight050(records: readonly AnyRecord050[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch050<T extends Entity050>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries050<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind050<K extends RecordKind050>(rec: AnyRecord050, kind: K): asserts rec is ByKind050[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
