import { summary060 } from '@org/lib060';
import { summary052 } from '@org/lib052';
import { createBatch067 } from './factory.js';
import { totalWeight067 } from './ops.js';

export function summary067(): { count: number; weight: number } {
  const upstream = [summary060(), summary052()];
  const batch = createBatch067(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight067(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
