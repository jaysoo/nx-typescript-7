import type { AnyRecord025, ByKind025, Entity025, RecordKind025 } from './models.js';

export function pick025<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind025(records: readonly AnyRecord025[]): Partial<{ [K in RecordKind025]: ByKind025[K][] }> {
  const out: Partial<{ [K in RecordKind025]: ByKind025[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord025[]).push(rec);
  }
  return out;
}

export function totalWeight025(records: readonly AnyRecord025[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch025<T extends Entity025>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries025<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind025<K extends RecordKind025>(rec: AnyRecord025, kind: K): asserts rec is ByKind025[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
