import type { AnyRecord005, ByKind005, Entity005, RecordKind005 } from './models.js';

export function pick005<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind005(records: readonly AnyRecord005[]): Partial<{ [K in RecordKind005]: ByKind005[K][] }> {
  const out: Partial<{ [K in RecordKind005]: ByKind005[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord005[]).push(rec);
  }
  return out;
}

export function totalWeight005(records: readonly AnyRecord005[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch005<T extends Entity005>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries005<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind005<K extends RecordKind005>(rec: AnyRecord005, kind: K): asserts rec is ByKind005[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
