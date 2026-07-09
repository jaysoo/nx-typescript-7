import { summary078 } from '@org/lib078';
import { summary074 } from '@org/lib074';
import { createBatch081 } from './factory.js';
import { totalWeight081 } from './ops.js';

export function summary081(): { count: number; weight: number } {
  const upstream = [summary078(), summary074()];
  const batch = createBatch081(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight081(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
