import type { AnyRecord034, ByKind034, Entity034, RecordKind034 } from './models.js';

export function pick034<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind034(records: readonly AnyRecord034[]): Partial<{ [K in RecordKind034]: ByKind034[K][] }> {
  const out: Partial<{ [K in RecordKind034]: ByKind034[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord034[]).push(rec);
  }
  return out;
}

export function totalWeight034(records: readonly AnyRecord034[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch034<T extends Entity034>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries034<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind034<K extends RecordKind034>(rec: AnyRecord034, kind: K): asserts rec is ByKind034[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
