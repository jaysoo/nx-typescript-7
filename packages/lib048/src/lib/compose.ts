import { summary037 } from '@org/lib037';
import { summary035 } from '@org/lib035';
import { createBatch048 } from './factory.js';
import { totalWeight048 } from './ops.js';

export function summary048(): { count: number; weight: number } {
  const upstream = [summary037(), summary035()];
  const batch = createBatch048(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight048(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
