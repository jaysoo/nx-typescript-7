import type { AnyRecord094, ByKind094, Entity094, RecordKind094 } from './models.js';

export function pick094<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind094(records: readonly AnyRecord094[]): Partial<{ [K in RecordKind094]: ByKind094[K][] }> {
  const out: Partial<{ [K in RecordKind094]: ByKind094[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord094[]).push(rec);
  }
  return out;
}

export function totalWeight094(records: readonly AnyRecord094[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch094<T extends Entity094>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries094<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind094<K extends RecordKind094>(rec: AnyRecord094, kind: K): asserts rec is ByKind094[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
