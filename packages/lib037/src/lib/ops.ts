import type { AnyRecord037, ByKind037, Entity037, RecordKind037 } from './models.js';

export function pick037<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind037(records: readonly AnyRecord037[]): Partial<{ [K in RecordKind037]: ByKind037[K][] }> {
  const out: Partial<{ [K in RecordKind037]: ByKind037[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord037[]).push(rec);
  }
  return out;
}

export function totalWeight037(records: readonly AnyRecord037[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch037<T extends Entity037>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries037<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind037<K extends RecordKind037>(rec: AnyRecord037, kind: K): asserts rec is ByKind037[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
