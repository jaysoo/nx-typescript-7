import type { AnyRecord042, ByKind042, Entity042, RecordKind042 } from './models.js';

export function pick042<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind042(records: readonly AnyRecord042[]): Partial<{ [K in RecordKind042]: ByKind042[K][] }> {
  const out: Partial<{ [K in RecordKind042]: ByKind042[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord042[]).push(rec);
  }
  return out;
}

export function totalWeight042(records: readonly AnyRecord042[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch042<T extends Entity042>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries042<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind042<K extends RecordKind042>(rec: AnyRecord042, kind: K): asserts rec is ByKind042[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
