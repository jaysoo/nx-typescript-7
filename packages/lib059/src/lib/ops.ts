import type { AnyRecord059, ByKind059, Entity059, RecordKind059 } from './models.js';

export function pick059<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind059(records: readonly AnyRecord059[]): Partial<{ [K in RecordKind059]: ByKind059[K][] }> {
  const out: Partial<{ [K in RecordKind059]: ByKind059[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord059[]).push(rec);
  }
  return out;
}

export function totalWeight059(records: readonly AnyRecord059[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch059<T extends Entity059>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries059<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind059<K extends RecordKind059>(rec: AnyRecord059, kind: K): asserts rec is ByKind059[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
