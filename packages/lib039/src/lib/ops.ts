import type { AnyRecord039, ByKind039, Entity039, RecordKind039 } from './models.js';

export function pick039<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind039(records: readonly AnyRecord039[]): Partial<{ [K in RecordKind039]: ByKind039[K][] }> {
  const out: Partial<{ [K in RecordKind039]: ByKind039[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord039[]).push(rec);
  }
  return out;
}

export function totalWeight039(records: readonly AnyRecord039[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch039<T extends Entity039>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries039<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind039<K extends RecordKind039>(rec: AnyRecord039, kind: K): asserts rec is ByKind039[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
