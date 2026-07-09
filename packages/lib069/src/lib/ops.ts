import type { AnyRecord069, ByKind069, Entity069, RecordKind069 } from './models.js';

export function pick069<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind069(records: readonly AnyRecord069[]): Partial<{ [K in RecordKind069]: ByKind069[K][] }> {
  const out: Partial<{ [K in RecordKind069]: ByKind069[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord069[]).push(rec);
  }
  return out;
}

export function totalWeight069(records: readonly AnyRecord069[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch069<T extends Entity069>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries069<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind069<K extends RecordKind069>(rec: AnyRecord069, kind: K): asserts rec is ByKind069[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
