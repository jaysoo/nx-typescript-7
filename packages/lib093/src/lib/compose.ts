import { summary082 } from '@org/lib082';
import { summary090 } from '@org/lib090';
import { createBatch093 } from './factory.js';
import { totalWeight093 } from './ops.js';

export function summary093(): { count: number; weight: number } {
  const upstream = [summary082(), summary090()];
  const batch = createBatch093(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight093(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
