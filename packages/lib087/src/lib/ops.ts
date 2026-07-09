import type { AnyRecord087, ByKind087, Entity087, RecordKind087 } from './models.js';

export function pick087<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind087(records: readonly AnyRecord087[]): Partial<{ [K in RecordKind087]: ByKind087[K][] }> {
  const out: Partial<{ [K in RecordKind087]: ByKind087[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord087[]).push(rec);
  }
  return out;
}

export function totalWeight087(records: readonly AnyRecord087[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch087<T extends Entity087>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries087<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind087<K extends RecordKind087>(rec: AnyRecord087, kind: K): asserts rec is ByKind087[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
