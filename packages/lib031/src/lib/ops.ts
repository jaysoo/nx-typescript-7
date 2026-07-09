import type { AnyRecord031, ByKind031, Entity031, RecordKind031 } from './models.js';

export function pick031<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind031(records: readonly AnyRecord031[]): Partial<{ [K in RecordKind031]: ByKind031[K][] }> {
  const out: Partial<{ [K in RecordKind031]: ByKind031[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord031[]).push(rec);
  }
  return out;
}

export function totalWeight031(records: readonly AnyRecord031[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch031<T extends Entity031>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries031<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind031<K extends RecordKind031>(rec: AnyRecord031, kind: K): asserts rec is ByKind031[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
