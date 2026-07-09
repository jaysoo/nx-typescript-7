import { summary023 } from '@org/lib023';
import { summary029 } from '@org/lib029';
import { createBatch036 } from './factory.js';
import { totalWeight036 } from './ops.js';

export function summary036(): { count: number; weight: number } {
  const upstream = [summary023(), summary029()];
  const batch = createBatch036(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight036(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
