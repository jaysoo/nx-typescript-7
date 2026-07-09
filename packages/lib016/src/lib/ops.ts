import type { AnyRecord016, ByKind016, Entity016, RecordKind016 } from './models.js';

export function pick016<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind016(records: readonly AnyRecord016[]): Partial<{ [K in RecordKind016]: ByKind016[K][] }> {
  const out: Partial<{ [K in RecordKind016]: ByKind016[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord016[]).push(rec);
  }
  return out;
}

export function totalWeight016(records: readonly AnyRecord016[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch016<T extends Entity016>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries016<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind016<K extends RecordKind016>(rec: AnyRecord016, kind: K): asserts rec is ByKind016[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
