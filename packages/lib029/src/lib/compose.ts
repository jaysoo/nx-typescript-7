import { summary014 } from '@org/lib014';
import { summary018 } from '@org/lib018';
import { createBatch029 } from './factory.js';
import { totalWeight029 } from './ops.js';

export function summary029(): { count: number; weight: number } {
  const upstream = [summary014(), summary018()];
  const batch = createBatch029(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight029(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
