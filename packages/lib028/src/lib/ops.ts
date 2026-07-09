import type { AnyRecord028, ByKind028, Entity028, RecordKind028 } from './models.js';

export function pick028<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind028(records: readonly AnyRecord028[]): Partial<{ [K in RecordKind028]: ByKind028[K][] }> {
  const out: Partial<{ [K in RecordKind028]: ByKind028[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord028[]).push(rec);
  }
  return out;
}

export function totalWeight028(records: readonly AnyRecord028[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch028<T extends Entity028>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries028<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind028<K extends RecordKind028>(rec: AnyRecord028, kind: K): asserts rec is ByKind028[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
