import type { AnyRecord062, ByKind062, Entity062, RecordKind062 } from './models.js';

export function pick062<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind062(records: readonly AnyRecord062[]): Partial<{ [K in RecordKind062]: ByKind062[K][] }> {
  const out: Partial<{ [K in RecordKind062]: ByKind062[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord062[]).push(rec);
  }
  return out;
}

export function totalWeight062(records: readonly AnyRecord062[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch062<T extends Entity062>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries062<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind062<K extends RecordKind062>(rec: AnyRecord062, kind: K): asserts rec is ByKind062[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
