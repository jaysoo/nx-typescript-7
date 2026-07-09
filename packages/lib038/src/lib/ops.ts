import type { AnyRecord038, ByKind038, Entity038, RecordKind038 } from './models.js';

export function pick038<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind038(records: readonly AnyRecord038[]): Partial<{ [K in RecordKind038]: ByKind038[K][] }> {
  const out: Partial<{ [K in RecordKind038]: ByKind038[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord038[]).push(rec);
  }
  return out;
}

export function totalWeight038(records: readonly AnyRecord038[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch038<T extends Entity038>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries038<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind038<K extends RecordKind038>(rec: AnyRecord038, kind: K): asserts rec is ByKind038[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
