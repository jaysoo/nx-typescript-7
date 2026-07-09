import type { AnyRecord048, ByKind048, Entity048, RecordKind048 } from './models.js';

export function pick048<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind048(records: readonly AnyRecord048[]): Partial<{ [K in RecordKind048]: ByKind048[K][] }> {
  const out: Partial<{ [K in RecordKind048]: ByKind048[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord048[]).push(rec);
  }
  return out;
}

export function totalWeight048(records: readonly AnyRecord048[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch048<T extends Entity048>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries048<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind048<K extends RecordKind048>(rec: AnyRecord048, kind: K): asserts rec is ByKind048[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
