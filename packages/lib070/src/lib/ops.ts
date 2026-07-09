import type { AnyRecord070, ByKind070, Entity070, RecordKind070 } from './models.js';

export function pick070<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind070(records: readonly AnyRecord070[]): Partial<{ [K in RecordKind070]: ByKind070[K][] }> {
  const out: Partial<{ [K in RecordKind070]: ByKind070[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord070[]).push(rec);
  }
  return out;
}

export function totalWeight070(records: readonly AnyRecord070[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch070<T extends Entity070>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries070<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind070<K extends RecordKind070>(rec: AnyRecord070, kind: K): asserts rec is ByKind070[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
