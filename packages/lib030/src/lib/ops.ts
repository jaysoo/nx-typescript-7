import type { AnyRecord030, ByKind030, Entity030, RecordKind030 } from './models.js';

export function pick030<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind030(records: readonly AnyRecord030[]): Partial<{ [K in RecordKind030]: ByKind030[K][] }> {
  const out: Partial<{ [K in RecordKind030]: ByKind030[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord030[]).push(rec);
  }
  return out;
}

export function totalWeight030(records: readonly AnyRecord030[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch030<T extends Entity030>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries030<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind030<K extends RecordKind030>(rec: AnyRecord030, kind: K): asserts rec is ByKind030[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
