import type { AnyRecord079, ByKind079, Entity079, RecordKind079 } from './models.js';

export function pick079<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind079(records: readonly AnyRecord079[]): Partial<{ [K in RecordKind079]: ByKind079[K][] }> {
  const out: Partial<{ [K in RecordKind079]: ByKind079[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord079[]).push(rec);
  }
  return out;
}

export function totalWeight079(records: readonly AnyRecord079[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch079<T extends Entity079>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries079<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind079<K extends RecordKind079>(rec: AnyRecord079, kind: K): asserts rec is ByKind079[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
