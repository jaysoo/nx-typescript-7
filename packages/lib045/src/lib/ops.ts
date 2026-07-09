import type { AnyRecord045, ByKind045, Entity045, RecordKind045 } from './models.js';

export function pick045<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind045(records: readonly AnyRecord045[]): Partial<{ [K in RecordKind045]: ByKind045[K][] }> {
  const out: Partial<{ [K in RecordKind045]: ByKind045[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord045[]).push(rec);
  }
  return out;
}

export function totalWeight045(records: readonly AnyRecord045[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch045<T extends Entity045>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries045<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind045<K extends RecordKind045>(rec: AnyRecord045, kind: K): asserts rec is ByKind045[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
