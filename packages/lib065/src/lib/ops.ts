import type { AnyRecord065, ByKind065, Entity065, RecordKind065 } from './models.js';

export function pick065<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind065(records: readonly AnyRecord065[]): Partial<{ [K in RecordKind065]: ByKind065[K][] }> {
  const out: Partial<{ [K in RecordKind065]: ByKind065[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord065[]).push(rec);
  }
  return out;
}

export function totalWeight065(records: readonly AnyRecord065[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch065<T extends Entity065>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries065<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind065<K extends RecordKind065>(rec: AnyRecord065, kind: K): asserts rec is ByKind065[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
