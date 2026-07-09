import type { AnyRecord006, ByKind006, Entity006, RecordKind006 } from './models.js';

export function pick006<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind006(records: readonly AnyRecord006[]): Partial<{ [K in RecordKind006]: ByKind006[K][] }> {
  const out: Partial<{ [K in RecordKind006]: ByKind006[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord006[]).push(rec);
  }
  return out;
}

export function totalWeight006(records: readonly AnyRecord006[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch006<T extends Entity006>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries006<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind006<K extends RecordKind006>(rec: AnyRecord006, kind: K): asserts rec is ByKind006[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
