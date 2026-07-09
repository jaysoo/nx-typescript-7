import type { AnyRecord063, ByKind063, Entity063, RecordKind063 } from './models.js';

export function pick063<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind063(records: readonly AnyRecord063[]): Partial<{ [K in RecordKind063]: ByKind063[K][] }> {
  const out: Partial<{ [K in RecordKind063]: ByKind063[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord063[]).push(rec);
  }
  return out;
}

export function totalWeight063(records: readonly AnyRecord063[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch063<T extends Entity063>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries063<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind063<K extends RecordKind063>(rec: AnyRecord063, kind: K): asserts rec is ByKind063[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
