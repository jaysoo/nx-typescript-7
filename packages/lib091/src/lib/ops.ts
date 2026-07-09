import type { AnyRecord091, ByKind091, Entity091, RecordKind091 } from './models.js';

export function pick091<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind091(records: readonly AnyRecord091[]): Partial<{ [K in RecordKind091]: ByKind091[K][] }> {
  const out: Partial<{ [K in RecordKind091]: ByKind091[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord091[]).push(rec);
  }
  return out;
}

export function totalWeight091(records: readonly AnyRecord091[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch091<T extends Entity091>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries091<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind091<K extends RecordKind091>(rec: AnyRecord091, kind: K): asserts rec is ByKind091[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
