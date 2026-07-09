import { summary076 } from '@org/lib076';
import { createBatch085 } from './factory.js';
import { totalWeight085 } from './ops.js';

export function summary085(): { count: number; weight: number } {
  const upstream = [summary076()];
  const batch = createBatch085(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight085(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
