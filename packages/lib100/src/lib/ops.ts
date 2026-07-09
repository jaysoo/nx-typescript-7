import type { AnyRecord100, ByKind100, Entity100, RecordKind100 } from './models.js';

export function pick100<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind100(records: readonly AnyRecord100[]): Partial<{ [K in RecordKind100]: ByKind100[K][] }> {
  const out: Partial<{ [K in RecordKind100]: ByKind100[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord100[]).push(rec);
  }
  return out;
}

export function totalWeight100(records: readonly AnyRecord100[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch100<T extends Entity100>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries100<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind100<K extends RecordKind100>(rec: AnyRecord100, kind: K): asserts rec is ByKind100[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
