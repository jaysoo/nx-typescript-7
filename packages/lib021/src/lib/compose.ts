import { summary018 } from '@org/lib018';
import { summary014 } from '@org/lib014';
import { createBatch021 } from './factory.js';
import { totalWeight021 } from './ops.js';

export function summary021(): { count: number; weight: number } {
  const upstream = [summary018(), summary014()];
  const batch = createBatch021(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight021(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
