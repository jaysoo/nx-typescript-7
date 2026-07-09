import { summary032 } from '@org/lib032';
import { summary040 } from '@org/lib040';
import { createBatch043 } from './factory.js';
import { totalWeight043 } from './ops.js';

export function summary043(): { count: number; weight: number } {
  const upstream = [summary032(), summary040()];
  const batch = createBatch043(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight043(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
