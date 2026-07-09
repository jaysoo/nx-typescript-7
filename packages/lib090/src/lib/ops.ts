import type { AnyRecord090, ByKind090, Entity090, RecordKind090 } from './models.js';

export function pick090<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind090(records: readonly AnyRecord090[]): Partial<{ [K in RecordKind090]: ByKind090[K][] }> {
  const out: Partial<{ [K in RecordKind090]: ByKind090[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord090[]).push(rec);
  }
  return out;
}

export function totalWeight090(records: readonly AnyRecord090[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch090<T extends Entity090>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries090<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind090<K extends RecordKind090>(rec: AnyRecord090, kind: K): asserts rec is ByKind090[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
