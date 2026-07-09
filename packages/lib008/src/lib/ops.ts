import type { AnyRecord008, ByKind008, Entity008, RecordKind008 } from './models.js';

export function pick008<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind008(records: readonly AnyRecord008[]): Partial<{ [K in RecordKind008]: ByKind008[K][] }> {
  const out: Partial<{ [K in RecordKind008]: ByKind008[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord008[]).push(rec);
  }
  return out;
}

export function totalWeight008(records: readonly AnyRecord008[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch008<T extends Entity008>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries008<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind008<K extends RecordKind008>(rec: AnyRecord008, kind: K): asserts rec is ByKind008[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
