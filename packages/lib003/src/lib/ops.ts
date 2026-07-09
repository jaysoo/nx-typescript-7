import type { AnyRecord003, ByKind003, Entity003, RecordKind003 } from './models.js';

export function pick003<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind003(records: readonly AnyRecord003[]): Partial<{ [K in RecordKind003]: ByKind003[K][] }> {
  const out: Partial<{ [K in RecordKind003]: ByKind003[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord003[]).push(rec);
  }
  return out;
}

export function totalWeight003(records: readonly AnyRecord003[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch003<T extends Entity003>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries003<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind003<K extends RecordKind003>(rec: AnyRecord003, kind: K): asserts rec is ByKind003[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
