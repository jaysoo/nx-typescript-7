import { summary090 } from '@org/lib090';
import { summary082 } from '@org/lib082';
import { createBatch097 } from './factory.js';
import { totalWeight097 } from './ops.js';

export function summary097(): { count: number; weight: number } {
  const upstream = [summary090(), summary082()];
  const batch = createBatch097(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight097(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
