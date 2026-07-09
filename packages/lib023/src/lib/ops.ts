import type { AnyRecord023, ByKind023, Entity023, RecordKind023 } from './models.js';

export function pick023<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind023(records: readonly AnyRecord023[]): Partial<{ [K in RecordKind023]: ByKind023[K][] }> {
  const out: Partial<{ [K in RecordKind023]: ByKind023[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord023[]).push(rec);
  }
  return out;
}

export function totalWeight023(records: readonly AnyRecord023[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch023<T extends Entity023>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries023<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind023<K extends RecordKind023>(rec: AnyRecord023, kind: K): asserts rec is ByKind023[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
