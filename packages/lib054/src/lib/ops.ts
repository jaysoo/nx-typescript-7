import type { AnyRecord054, ByKind054, Entity054, RecordKind054 } from './models.js';

export function pick054<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind054(records: readonly AnyRecord054[]): Partial<{ [K in RecordKind054]: ByKind054[K][] }> {
  const out: Partial<{ [K in RecordKind054]: ByKind054[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord054[]).push(rec);
  }
  return out;
}

export function totalWeight054(records: readonly AnyRecord054[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch054<T extends Entity054>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries054<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind054<K extends RecordKind054>(rec: AnyRecord054, kind: K): asserts rec is ByKind054[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
