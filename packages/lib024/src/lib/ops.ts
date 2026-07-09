import type { AnyRecord024, ByKind024, Entity024, RecordKind024 } from './models.js';

export function pick024<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind024(records: readonly AnyRecord024[]): Partial<{ [K in RecordKind024]: ByKind024[K][] }> {
  const out: Partial<{ [K in RecordKind024]: ByKind024[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord024[]).push(rec);
  }
  return out;
}

export function totalWeight024(records: readonly AnyRecord024[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch024<T extends Entity024>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries024<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind024<K extends RecordKind024>(rec: AnyRecord024, kind: K): asserts rec is ByKind024[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
