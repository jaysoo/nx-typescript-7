import type { AnyRecord043, ByKind043, Entity043, RecordKind043 } from './models.js';

export function pick043<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind043(records: readonly AnyRecord043[]): Partial<{ [K in RecordKind043]: ByKind043[K][] }> {
  const out: Partial<{ [K in RecordKind043]: ByKind043[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord043[]).push(rec);
  }
  return out;
}

export function totalWeight043(records: readonly AnyRecord043[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch043<T extends Entity043>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries043<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind043<K extends RecordKind043>(rec: AnyRecord043, kind: K): asserts rec is ByKind043[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
