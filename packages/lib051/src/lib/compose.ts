import { summary048 } from '@org/lib048';
import { summary044 } from '@org/lib044';
import { createBatch051 } from './factory.js';
import { totalWeight051 } from './ops.js';

export function summary051(): { count: number; weight: number } {
  const upstream = [summary048(), summary044()];
  const batch = createBatch051(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight051(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
