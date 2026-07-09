import type { AnyRecord086, ByKind086, Entity086, RecordKind086 } from './models.js';

export function pick086<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind086(records: readonly AnyRecord086[]): Partial<{ [K in RecordKind086]: ByKind086[K][] }> {
  const out: Partial<{ [K in RecordKind086]: ByKind086[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord086[]).push(rec);
  }
  return out;
}

export function totalWeight086(records: readonly AnyRecord086[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch086<T extends Entity086>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries086<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind086<K extends RecordKind086>(rec: AnyRecord086, kind: K): asserts rec is ByKind086[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
