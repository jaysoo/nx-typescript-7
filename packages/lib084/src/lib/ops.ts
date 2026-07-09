import type { AnyRecord084, ByKind084, Entity084, RecordKind084 } from './models.js';

export function pick084<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind084(records: readonly AnyRecord084[]): Partial<{ [K in RecordKind084]: ByKind084[K][] }> {
  const out: Partial<{ [K in RecordKind084]: ByKind084[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord084[]).push(rec);
  }
  return out;
}

export function totalWeight084(records: readonly AnyRecord084[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch084<T extends Entity084>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries084<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind084<K extends RecordKind084>(rec: AnyRecord084, kind: K): asserts rec is ByKind084[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
