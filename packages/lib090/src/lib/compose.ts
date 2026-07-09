import { summary071 } from '@org/lib071';
import { createBatch090 } from './factory.js';
import { totalWeight090 } from './ops.js';

export function summary090(): { count: number; weight: number } {
  const upstream = [summary071()];
  const batch = createBatch090(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight090(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
