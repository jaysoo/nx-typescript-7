import { summary011 } from '@org/lib011';
import { createBatch030 } from './factory.js';
import { totalWeight030 } from './ops.js';

export function summary030(): { count: number; weight: number } {
  const upstream = [summary011()];
  const batch = createBatch030(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight030(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
