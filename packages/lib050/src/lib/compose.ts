import { summary031 } from '@org/lib031';
import { createBatch050 } from './factory.js';
import { totalWeight050 } from './ops.js';

export function summary050(): { count: number; weight: number } {
  const upstream = [summary031()];
  const batch = createBatch050(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight050(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
