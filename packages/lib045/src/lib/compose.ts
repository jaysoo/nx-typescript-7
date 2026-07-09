import { summary036 } from '@org/lib036';
import { createBatch045 } from './factory.js';
import { totalWeight045 } from './ops.js';

export function summary045(): { count: number; weight: number } {
  const upstream = [summary036()];
  const batch = createBatch045(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight045(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
