import { summary033 } from '@org/lib033';
import { summary039 } from '@org/lib039';
import { createBatch046 } from './factory.js';
import { totalWeight046 } from './ops.js';

export function summary046(): { count: number; weight: number } {
  const upstream = [summary033(), summary039()];
  const batch = createBatch046(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight046(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
