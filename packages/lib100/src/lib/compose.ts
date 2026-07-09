import { summary081 } from '@org/lib081';
import { createBatch100 } from './factory.js';
import { totalWeight100 } from './ops.js';

export function summary100(): { count: number; weight: number } {
  const upstream = [summary081()];
  const batch = createBatch100(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight100(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
