import { summary028 } from '@org/lib028';
import { summary024 } from '@org/lib024';
import { createBatch031 } from './factory.js';
import { totalWeight031 } from './ops.js';

export function summary031(): { count: number; weight: number } {
  const upstream = [summary028(), summary024()];
  const batch = createBatch031(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight031(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
