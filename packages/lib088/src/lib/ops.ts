import type { AnyRecord088, ByKind088, Entity088, RecordKind088 } from './models.js';

export function pick088<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind088(records: readonly AnyRecord088[]): Partial<{ [K in RecordKind088]: ByKind088[K][] }> {
  const out: Partial<{ [K in RecordKind088]: ByKind088[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord088[]).push(rec);
  }
  return out;
}

export function totalWeight088(records: readonly AnyRecord088[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch088<T extends Entity088>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries088<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind088<K extends RecordKind088>(rec: AnyRecord088, kind: K): asserts rec is ByKind088[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
