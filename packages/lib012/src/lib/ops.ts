import type { AnyRecord012, ByKind012, Entity012, RecordKind012 } from './models.js';

export function pick012<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind012(records: readonly AnyRecord012[]): Partial<{ [K in RecordKind012]: ByKind012[K][] }> {
  const out: Partial<{ [K in RecordKind012]: ByKind012[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord012[]).push(rec);
  }
  return out;
}

export function totalWeight012(records: readonly AnyRecord012[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch012<T extends Entity012>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries012<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind012<K extends RecordKind012>(rec: AnyRecord012, kind: K): asserts rec is ByKind012[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
