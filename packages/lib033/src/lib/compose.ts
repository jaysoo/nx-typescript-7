import { summary022 } from '@org/lib022';
import { summary030 } from '@org/lib030';
import { createBatch033 } from './factory.js';
import { totalWeight033 } from './ops.js';

export function summary033(): { count: number; weight: number } {
  const upstream = [summary022(), summary030()];
  const batch = createBatch033(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight033(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
