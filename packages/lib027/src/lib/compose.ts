import { summary020 } from '@org/lib020';
import { summary012 } from '@org/lib012';
import { createBatch027 } from './factory.js';
import { totalWeight027 } from './ops.js';

export function summary027(): { count: number; weight: number } {
  const upstream = [summary020(), summary012()];
  const batch = createBatch027(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight027(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
