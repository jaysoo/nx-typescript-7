import type { AnyRecord014, ByKind014, Entity014, RecordKind014 } from './models.js';

export function pick014<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind014(records: readonly AnyRecord014[]): Partial<{ [K in RecordKind014]: ByKind014[K][] }> {
  const out: Partial<{ [K in RecordKind014]: ByKind014[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord014[]).push(rec);
  }
  return out;
}

export function totalWeight014(records: readonly AnyRecord014[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch014<T extends Entity014>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries014<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind014<K extends RecordKind014>(rec: AnyRecord014, kind: K): asserts rec is ByKind014[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
