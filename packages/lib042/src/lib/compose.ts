import { summary035 } from '@org/lib035';
import { summary037 } from '@org/lib037';
import { createBatch042 } from './factory.js';
import { totalWeight042 } from './ops.js';

export function summary042(): { count: number; weight: number } {
  const upstream = [summary035(), summary037()];
  const batch = createBatch042(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight042(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
