import { summary009 } from '@org/lib009';
import { summary003 } from '@org/lib003';
import { createBatch014 } from './factory.js';
import { totalWeight014 } from './ops.js';

export function summary014(): { count: number; weight: number } {
  const upstream = [summary009(), summary003()];
  const batch = createBatch014(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight014(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
