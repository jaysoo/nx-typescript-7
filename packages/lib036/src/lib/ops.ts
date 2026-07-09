import type { AnyRecord036, ByKind036, Entity036, RecordKind036 } from './models.js';

export function pick036<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind036(records: readonly AnyRecord036[]): Partial<{ [K in RecordKind036]: ByKind036[K][] }> {
  const out: Partial<{ [K in RecordKind036]: ByKind036[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord036[]).push(rec);
  }
  return out;
}

export function totalWeight036(records: readonly AnyRecord036[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch036<T extends Entity036>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries036<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind036<K extends RecordKind036>(rec: AnyRecord036, kind: K): asserts rec is ByKind036[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
