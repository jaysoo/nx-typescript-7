import type { AnyRecord035, ByKind035, Entity035, RecordKind035 } from './models.js';

export function pick035<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind035(records: readonly AnyRecord035[]): Partial<{ [K in RecordKind035]: ByKind035[K][] }> {
  const out: Partial<{ [K in RecordKind035]: ByKind035[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord035[]).push(rec);
  }
  return out;
}

export function totalWeight035(records: readonly AnyRecord035[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch035<T extends Entity035>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries035<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind035<K extends RecordKind035>(rec: AnyRecord035, kind: K): asserts rec is ByKind035[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
