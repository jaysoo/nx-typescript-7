import type { AnyRecord075, ByKind075, Entity075, RecordKind075 } from './models.js';

export function pick075<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind075(records: readonly AnyRecord075[]): Partial<{ [K in RecordKind075]: ByKind075[K][] }> {
  const out: Partial<{ [K in RecordKind075]: ByKind075[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord075[]).push(rec);
  }
  return out;
}

export function totalWeight075(records: readonly AnyRecord075[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch075<T extends Entity075>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries075<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind075<K extends RecordKind075>(rec: AnyRecord075, kind: K): asserts rec is ByKind075[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
