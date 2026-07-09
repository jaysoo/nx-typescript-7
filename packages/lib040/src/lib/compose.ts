import { summary021 } from '@org/lib021';
import { createBatch040 } from './factory.js';
import { totalWeight040 } from './ops.js';

export function summary040(): { count: number; weight: number } {
  const upstream = [summary021()];
  const batch = createBatch040(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight040(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
