import type { AnyRecord056, ByKind056, Entity056, RecordKind056 } from './models.js';

export function pick056<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind056(records: readonly AnyRecord056[]): Partial<{ [K in RecordKind056]: ByKind056[K][] }> {
  const out: Partial<{ [K in RecordKind056]: ByKind056[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord056[]).push(rec);
  }
  return out;
}

export function totalWeight056(records: readonly AnyRecord056[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch056<T extends Entity056>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries056<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind056<K extends RecordKind056>(rec: AnyRecord056, kind: K): asserts rec is ByKind056[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
