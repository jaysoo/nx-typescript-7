import type { AnyRecord098, ByKind098, Entity098, RecordKind098 } from './models.js';

export function pick098<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind098(records: readonly AnyRecord098[]): Partial<{ [K in RecordKind098]: ByKind098[K][] }> {
  const out: Partial<{ [K in RecordKind098]: ByKind098[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord098[]).push(rec);
  }
  return out;
}

export function totalWeight098(records: readonly AnyRecord098[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch098<T extends Entity098>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries098<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind098<K extends RecordKind098>(rec: AnyRecord098, kind: K): asserts rec is ByKind098[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
