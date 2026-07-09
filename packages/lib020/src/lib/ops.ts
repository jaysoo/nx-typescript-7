import type { AnyRecord020, ByKind020, Entity020, RecordKind020 } from './models.js';

export function pick020<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind020(records: readonly AnyRecord020[]): Partial<{ [K in RecordKind020]: ByKind020[K][] }> {
  const out: Partial<{ [K in RecordKind020]: ByKind020[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord020[]).push(rec);
  }
  return out;
}

export function totalWeight020(records: readonly AnyRecord020[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch020<T extends Entity020>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries020<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind020<K extends RecordKind020>(rec: AnyRecord020, kind: K): asserts rec is ByKind020[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
