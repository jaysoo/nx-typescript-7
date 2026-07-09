import type { AnyRecord066, ByKind066, Entity066, RecordKind066 } from './models.js';

export function pick066<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind066(records: readonly AnyRecord066[]): Partial<{ [K in RecordKind066]: ByKind066[K][] }> {
  const out: Partial<{ [K in RecordKind066]: ByKind066[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord066[]).push(rec);
  }
  return out;
}

export function totalWeight066(records: readonly AnyRecord066[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch066<T extends Entity066>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries066<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind066<K extends RecordKind066>(rec: AnyRecord066, kind: K): asserts rec is ByKind066[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
