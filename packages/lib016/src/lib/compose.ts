import { summary003 } from '@org/lib003';
import { summary009 } from '@org/lib009';
import { createBatch016 } from './factory.js';
import { totalWeight016 } from './ops.js';

export function summary016(): { count: number; weight: number } {
  const upstream = [summary003(), summary009()];
  const batch = createBatch016(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight016(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
