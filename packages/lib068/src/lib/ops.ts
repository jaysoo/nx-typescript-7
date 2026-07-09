import type { AnyRecord068, ByKind068, Entity068, RecordKind068 } from './models.js';

export function pick068<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind068(records: readonly AnyRecord068[]): Partial<{ [K in RecordKind068]: ByKind068[K][] }> {
  const out: Partial<{ [K in RecordKind068]: ByKind068[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord068[]).push(rec);
  }
  return out;
}

export function totalWeight068(records: readonly AnyRecord068[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch068<T extends Entity068>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries068<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind068<K extends RecordKind068>(rec: AnyRecord068, kind: K): asserts rec is ByKind068[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
