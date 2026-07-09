import type { AnyRecord040, ByKind040, Entity040, RecordKind040 } from './models.js';

export function pick040<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind040(records: readonly AnyRecord040[]): Partial<{ [K in RecordKind040]: ByKind040[K][] }> {
  const out: Partial<{ [K in RecordKind040]: ByKind040[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord040[]).push(rec);
  }
  return out;
}

export function totalWeight040(records: readonly AnyRecord040[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch040<T extends Entity040>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries040<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind040<K extends RecordKind040>(rec: AnyRecord040, kind: K): asserts rec is ByKind040[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
