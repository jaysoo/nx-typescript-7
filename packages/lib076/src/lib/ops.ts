import type { AnyRecord076, ByKind076, Entity076, RecordKind076 } from './models.js';

export function pick076<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind076(records: readonly AnyRecord076[]): Partial<{ [K in RecordKind076]: ByKind076[K][] }> {
  const out: Partial<{ [K in RecordKind076]: ByKind076[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord076[]).push(rec);
  }
  return out;
}

export function totalWeight076(records: readonly AnyRecord076[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch076<T extends Entity076>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries076<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind076<K extends RecordKind076>(rec: AnyRecord076, kind: K): asserts rec is ByKind076[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
