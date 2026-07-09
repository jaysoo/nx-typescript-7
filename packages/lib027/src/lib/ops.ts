import type { AnyRecord027, ByKind027, Entity027, RecordKind027 } from './models.js';

export function pick027<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind027(records: readonly AnyRecord027[]): Partial<{ [K in RecordKind027]: ByKind027[K][] }> {
  const out: Partial<{ [K in RecordKind027]: ByKind027[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord027[]).push(rec);
  }
  return out;
}

export function totalWeight027(records: readonly AnyRecord027[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch027<T extends Entity027>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries027<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind027<K extends RecordKind027>(rec: AnyRecord027, kind: K): asserts rec is ByKind027[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
