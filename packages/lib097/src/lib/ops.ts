import type { AnyRecord097, ByKind097, Entity097, RecordKind097 } from './models.js';

export function pick097<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind097(records: readonly AnyRecord097[]): Partial<{ [K in RecordKind097]: ByKind097[K][] }> {
  const out: Partial<{ [K in RecordKind097]: ByKind097[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord097[]).push(rec);
  }
  return out;
}

export function totalWeight097(records: readonly AnyRecord097[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch097<T extends Entity097>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries097<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind097<K extends RecordKind097>(rec: AnyRecord097, kind: K): asserts rec is ByKind097[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
