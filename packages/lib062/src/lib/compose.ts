import { summary055 } from '@org/lib055';
import { summary057 } from '@org/lib057';
import { createBatch062 } from './factory.js';
import { totalWeight062 } from './ops.js';

export function summary062(): { count: number; weight: number } {
  const upstream = [summary055(), summary057()];
  const batch = createBatch062(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight062(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
