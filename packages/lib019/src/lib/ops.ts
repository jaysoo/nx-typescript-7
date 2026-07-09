import type { AnyRecord019, ByKind019, Entity019, RecordKind019 } from './models.js';

export function pick019<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind019(records: readonly AnyRecord019[]): Partial<{ [K in RecordKind019]: ByKind019[K][] }> {
  const out: Partial<{ [K in RecordKind019]: ByKind019[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord019[]).push(rec);
  }
  return out;
}

export function totalWeight019(records: readonly AnyRecord019[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch019<T extends Entity019>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries019<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind019<K extends RecordKind019>(rec: AnyRecord019, kind: K): asserts rec is ByKind019[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
