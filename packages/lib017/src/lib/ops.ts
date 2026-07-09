import type { AnyRecord017, ByKind017, Entity017, RecordKind017 } from './models.js';

export function pick017<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind017(records: readonly AnyRecord017[]): Partial<{ [K in RecordKind017]: ByKind017[K][] }> {
  const out: Partial<{ [K in RecordKind017]: ByKind017[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord017[]).push(rec);
  }
  return out;
}

export function totalWeight017(records: readonly AnyRecord017[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch017<T extends Entity017>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries017<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind017<K extends RecordKind017>(rec: AnyRecord017, kind: K): asserts rec is ByKind017[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
