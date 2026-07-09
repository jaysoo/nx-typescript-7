import type { AnyRecord033, ByKind033, Entity033, RecordKind033 } from './models.js';

export function pick033<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind033(records: readonly AnyRecord033[]): Partial<{ [K in RecordKind033]: ByKind033[K][] }> {
  const out: Partial<{ [K in RecordKind033]: ByKind033[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord033[]).push(rec);
  }
  return out;
}

export function totalWeight033(records: readonly AnyRecord033[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch033<T extends Entity033>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries033<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind033<K extends RecordKind033>(rec: AnyRecord033, kind: K): asserts rec is ByKind033[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
