import type { AnyRecord004, ByKind004, Entity004, RecordKind004 } from './models.js';

export function pick004<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind004(records: readonly AnyRecord004[]): Partial<{ [K in RecordKind004]: ByKind004[K][] }> {
  const out: Partial<{ [K in RecordKind004]: ByKind004[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord004[]).push(rec);
  }
  return out;
}

export function totalWeight004(records: readonly AnyRecord004[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch004<T extends Entity004>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries004<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind004<K extends RecordKind004>(rec: AnyRecord004, kind: K): asserts rec is ByKind004[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
