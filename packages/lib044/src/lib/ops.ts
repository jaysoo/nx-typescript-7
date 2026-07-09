import type { AnyRecord044, ByKind044, Entity044, RecordKind044 } from './models.js';

export function pick044<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind044(records: readonly AnyRecord044[]): Partial<{ [K in RecordKind044]: ByKind044[K][] }> {
  const out: Partial<{ [K in RecordKind044]: ByKind044[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord044[]).push(rec);
  }
  return out;
}

export function totalWeight044(records: readonly AnyRecord044[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch044<T extends Entity044>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries044<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind044<K extends RecordKind044>(rec: AnyRecord044, kind: K): asserts rec is ByKind044[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
