import type { AnyRecord046, ByKind046, Entity046, RecordKind046 } from './models.js';

export function pick046<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind046(records: readonly AnyRecord046[]): Partial<{ [K in RecordKind046]: ByKind046[K][] }> {
  const out: Partial<{ [K in RecordKind046]: ByKind046[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord046[]).push(rec);
  }
  return out;
}

export function totalWeight046(records: readonly AnyRecord046[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch046<T extends Entity046>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries046<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind046<K extends RecordKind046>(rec: AnyRecord046, kind: K): asserts rec is ByKind046[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
