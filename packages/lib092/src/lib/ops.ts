import type { AnyRecord092, ByKind092, Entity092, RecordKind092 } from './models.js';

export function pick092<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind092(records: readonly AnyRecord092[]): Partial<{ [K in RecordKind092]: ByKind092[K][] }> {
  const out: Partial<{ [K in RecordKind092]: ByKind092[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord092[]).push(rec);
  }
  return out;
}

export function totalWeight092(records: readonly AnyRecord092[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch092<T extends Entity092>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries092<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind092<K extends RecordKind092>(rec: AnyRecord092, kind: K): asserts rec is ByKind092[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
