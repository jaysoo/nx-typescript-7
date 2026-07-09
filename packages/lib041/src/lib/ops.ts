import type { AnyRecord041, ByKind041, Entity041, RecordKind041 } from './models.js';

export function pick041<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind041(records: readonly AnyRecord041[]): Partial<{ [K in RecordKind041]: ByKind041[K][] }> {
  const out: Partial<{ [K in RecordKind041]: ByKind041[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord041[]).push(rec);
  }
  return out;
}

export function totalWeight041(records: readonly AnyRecord041[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch041<T extends Entity041>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries041<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind041<K extends RecordKind041>(rec: AnyRecord041, kind: K): asserts rec is ByKind041[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
