import type { AnyRecord002, ByKind002, Entity002, RecordKind002 } from './models.js';

export function pick002<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind002(records: readonly AnyRecord002[]): Partial<{ [K in RecordKind002]: ByKind002[K][] }> {
  const out: Partial<{ [K in RecordKind002]: ByKind002[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord002[]).push(rec);
  }
  return out;
}

export function totalWeight002(records: readonly AnyRecord002[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch002<T extends Entity002>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries002<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind002<K extends RecordKind002>(rec: AnyRecord002, kind: K): asserts rec is ByKind002[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
