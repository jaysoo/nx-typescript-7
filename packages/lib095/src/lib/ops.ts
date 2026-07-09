import type { AnyRecord095, ByKind095, Entity095, RecordKind095 } from './models.js';

export function pick095<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind095(records: readonly AnyRecord095[]): Partial<{ [K in RecordKind095]: ByKind095[K][] }> {
  const out: Partial<{ [K in RecordKind095]: ByKind095[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord095[]).push(rec);
  }
  return out;
}

export function totalWeight095(records: readonly AnyRecord095[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch095<T extends Entity095>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries095<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind095<K extends RecordKind095>(rec: AnyRecord095, kind: K): asserts rec is ByKind095[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
