import { summary051 } from '@org/lib051';
import { createBatch070 } from './factory.js';
import { totalWeight070 } from './ops.js';

export function summary070(): { count: number; weight: number } {
  const upstream = [summary051()];
  const batch = createBatch070(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight070(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
