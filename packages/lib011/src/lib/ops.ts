import type { AnyRecord011, ByKind011, Entity011, RecordKind011 } from './models.js';

export function pick011<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind011(records: readonly AnyRecord011[]): Partial<{ [K in RecordKind011]: ByKind011[K][] }> {
  const out: Partial<{ [K in RecordKind011]: ByKind011[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord011[]).push(rec);
  }
  return out;
}

export function totalWeight011(records: readonly AnyRecord011[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch011<T extends Entity011>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries011<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind011<K extends RecordKind011>(rec: AnyRecord011, kind: K): asserts rec is ByKind011[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
