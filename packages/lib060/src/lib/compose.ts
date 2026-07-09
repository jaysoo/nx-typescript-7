import { summary041 } from '@org/lib041';
import { createBatch060 } from './factory.js';
import { totalWeight060 } from './ops.js';

export function summary060(): { count: number; weight: number } {
  const upstream = [summary041()];
  const batch = createBatch060(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight060(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
