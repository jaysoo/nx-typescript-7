import type { AnyRecord099, ByKind099, Entity099, RecordKind099 } from './models.js';

export function pick099<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind099(records: readonly AnyRecord099[]): Partial<{ [K in RecordKind099]: ByKind099[K][] }> {
  const out: Partial<{ [K in RecordKind099]: ByKind099[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord099[]).push(rec);
  }
  return out;
}

export function totalWeight099(records: readonly AnyRecord099[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch099<T extends Entity099>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries099<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind099<K extends RecordKind099>(rec: AnyRecord099, kind: K): asserts rec is ByKind099[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
