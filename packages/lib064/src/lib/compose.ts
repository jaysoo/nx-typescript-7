import { summary059 } from '@org/lib059';
import { summary053 } from '@org/lib053';
import { createBatch064 } from './factory.js';
import { totalWeight064 } from './ops.js';

export function summary064(): { count: number; weight: number } {
  const upstream = [summary059(), summary053()];
  const batch = createBatch064(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight064(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
