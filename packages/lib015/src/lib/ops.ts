import type { AnyRecord015, ByKind015, Entity015, RecordKind015 } from './models.js';

export function pick015<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind015(records: readonly AnyRecord015[]): Partial<{ [K in RecordKind015]: ByKind015[K][] }> {
  const out: Partial<{ [K in RecordKind015]: ByKind015[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord015[]).push(rec);
  }
  return out;
}

export function totalWeight015(records: readonly AnyRecord015[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch015<T extends Entity015>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries015<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind015<K extends RecordKind015>(rec: AnyRecord015, kind: K): asserts rec is ByKind015[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
