import type { AnyRecord022, ByKind022, Entity022, RecordKind022 } from './models.js';

export function pick022<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind022(records: readonly AnyRecord022[]): Partial<{ [K in RecordKind022]: ByKind022[K][] }> {
  const out: Partial<{ [K in RecordKind022]: ByKind022[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord022[]).push(rec);
  }
  return out;
}

export function totalWeight022(records: readonly AnyRecord022[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch022<T extends Entity022>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries022<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind022<K extends RecordKind022>(rec: AnyRecord022, kind: K): asserts rec is ByKind022[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
