import { summary006 } from '@org/lib006';
import { createBatch015 } from './factory.js';
import { totalWeight015 } from './ops.js';

export function summary015(): { count: number; weight: number } {
  const upstream = [summary006()];
  const batch = createBatch015(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight015(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
