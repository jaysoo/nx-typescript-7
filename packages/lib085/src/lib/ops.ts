import type { AnyRecord085, ByKind085, Entity085, RecordKind085 } from './models.js';

export function pick085<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind085(records: readonly AnyRecord085[]): Partial<{ [K in RecordKind085]: ByKind085[K][] }> {
  const out: Partial<{ [K in RecordKind085]: ByKind085[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord085[]).push(rec);
  }
  return out;
}

export function totalWeight085(records: readonly AnyRecord085[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch085<T extends Entity085>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries085<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind085<K extends RecordKind085>(rec: AnyRecord085, kind: K): asserts rec is ByKind085[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
