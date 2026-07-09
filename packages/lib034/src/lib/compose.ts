import { summary029 } from '@org/lib029';
import { summary023 } from '@org/lib023';
import { createBatch034 } from './factory.js';
import { totalWeight034 } from './ops.js';

export function summary034(): { count: number; weight: number } {
  const upstream = [summary029(), summary023()];
  const batch = createBatch034(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight034(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
