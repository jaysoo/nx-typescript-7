import type { AnyRecord072, ByKind072, Entity072, RecordKind072 } from './models.js';

export function pick072<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}

export function groupByKind072(records: readonly AnyRecord072[]): Partial<{ [K in RecordKind072]: ByKind072[K][] }> {
  const out: Partial<{ [K in RecordKind072]: ByKind072[K][] }> = {};
  for (const rec of records) {
    const bucket = (out[rec.kind] ??= []);
    (bucket as AnyRecord072[]).push(rec);
  }
  return out;
}

export function totalWeight072(records: readonly AnyRecord072[]): number {
  return records.reduce((sum, rec) => sum + rec.weight, 0);
}

export function touch072<T extends Entity072>(entity: T, now: number): T {
  return { ...entity, updatedAt: now, revision: entity.revision + 1 };
}

export async function mapSeries072<T, R>(items: readonly T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let index = 0; index < items.length; index++) {
    out.push(await fn(items[index], index));
  }
  return out;
}

export function assertKind072<K extends RecordKind072>(rec: AnyRecord072, kind: K): asserts rec is ByKind072[K] {
  if (rec.kind !== kind) {
    throw new Error(`expected ${kind}, got ${rec.kind}`);
  }
}
