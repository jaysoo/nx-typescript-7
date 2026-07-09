import { summary030 } from '@org/lib030';
import { summary022 } from '@org/lib022';
import { createBatch037 } from './factory.js';
import { totalWeight037 } from './ops.js';

export function summary037(): { count: number; weight: number } {
  const upstream = [summary030(), summary022()];
  const batch = createBatch037(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight037(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
