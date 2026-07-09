import type { AnyRecord089, ByKind089, Entity089, RecordKind089 } from './models.js';

export function pick089<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind089(records: readonly AnyRecord089[]): Partial<{ [K in RecordKind089]: ByKind089[K][] }> {
  const out: Partial<{ [K in RecordKind089]: ByKind089[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord089[]).push(rec);
  }
  return out;
}

export function totalWeight089(records: readonly AnyRecord089[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch089<T extends Entity089>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries089<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind089<K extends RecordKind089>(rec: AnyRecord089, kind: K): asserts rec is ByKind089[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
