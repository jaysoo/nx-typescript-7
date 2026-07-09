import { summary058 } from '@org/lib058';
import { summary054 } from '@org/lib054';
import { createBatch061 } from './factory.js';
import { totalWeight061 } from './ops.js';

export function summary061(): { count: number; weight: number } {
  const upstream = [summary058(), summary054()];
  const batch = createBatch061(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight061(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
