import type { AnyRecord058, ByKind058, Entity058, RecordKind058 } from './models.js';

export function pick058<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind058(records: readonly AnyRecord058[]): Partial<{ [K in RecordKind058]: ByKind058[K][] }> {
  const out: Partial<{ [K in RecordKind058]: ByKind058[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord058[]).push(rec);
  }
  return out;
}

export function totalWeight058(records: readonly AnyRecord058[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch058<T extends Entity058>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries058<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind058<K extends RecordKind058>(rec: AnyRecord058, kind: K): asserts rec is ByKind058[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
