import { summary047 } from '@org/lib047';
import { summary045 } from '@org/lib045';
import { createBatch058 } from './factory.js';
import { totalWeight058 } from './ops.js';

export function summary058(): { count: number; weight: number } {
  const upstream = [summary047(), summary045()];
  const batch = createBatch058(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight058(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
