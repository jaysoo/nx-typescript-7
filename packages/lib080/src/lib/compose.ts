import { summary061 } from '@org/lib061';
import { createBatch080 } from './factory.js';
import { totalWeight080 } from './ops.js';

export function summary080(): { count: number; weight: number } {
  const upstream = [summary061()];
  const batch = createBatch080(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight080(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
