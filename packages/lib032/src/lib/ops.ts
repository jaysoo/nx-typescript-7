import type { AnyRecord032, ByKind032, Entity032, RecordKind032 } from './models.js';

export function pick032<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind032(records: readonly AnyRecord032[]): Partial<{ [K in RecordKind032]: ByKind032[K][] }> {
  const out: Partial<{ [K in RecordKind032]: ByKind032[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord032[]).push(rec);
  }
  return out;
}

export function totalWeight032(records: readonly AnyRecord032[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch032<T extends Entity032>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries032<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind032<K extends RecordKind032>(rec: AnyRecord032, kind: K): asserts rec is ByKind032[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
