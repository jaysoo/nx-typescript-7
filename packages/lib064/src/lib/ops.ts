import type { AnyRecord064, ByKind064, Entity064, RecordKind064 } from './models.js';

export function pick064<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind064(records: readonly AnyRecord064[]): Partial<{ [K in RecordKind064]: ByKind064[K][] }> {
  const out: Partial<{ [K in RecordKind064]: ByKind064[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord064[]).push(rec);
  }
  return out;
}

export function totalWeight064(records: readonly AnyRecord064[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch064<T extends Entity064>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries064<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind064<K extends RecordKind064>(rec: AnyRecord064, kind: K): asserts rec is ByKind064[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
