import type { AnyRecord057, ByKind057, Entity057, RecordKind057 } from './models.js';

export function pick057<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind057(records: readonly AnyRecord057[]): Partial<{ [K in RecordKind057]: ByKind057[K][] }> {
  const out: Partial<{ [K in RecordKind057]: ByKind057[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord057[]).push(rec);
  }
  return out;
}

export function totalWeight057(records: readonly AnyRecord057[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch057<T extends Entity057>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries057<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind057<K extends RecordKind057>(rec: AnyRecord057, kind: K): asserts rec is ByKind057[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
