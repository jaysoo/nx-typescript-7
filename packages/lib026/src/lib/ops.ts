import type { AnyRecord026, ByKind026, Entity026, RecordKind026 } from './models.js';

export function pick026<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind026(records: readonly AnyRecord026[]): Partial<{ [K in RecordKind026]: ByKind026[K][] }> {
  const out: Partial<{ [K in RecordKind026]: ByKind026[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord026[]).push(rec);
  }
  return out;
}

export function totalWeight026(records: readonly AnyRecord026[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch026<T extends Entity026>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries026<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind026<K extends RecordKind026>(rec: AnyRecord026, kind: K): asserts rec is ByKind026[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
