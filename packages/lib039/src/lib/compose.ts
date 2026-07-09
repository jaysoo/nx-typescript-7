import { summary024 } from '@org/lib024';
import { summary028 } from '@org/lib028';
import { createBatch039 } from './factory.js';
import { totalWeight039 } from './ops.js';

export function summary039(): { count: number; weight: number } {
  const upstream = [summary024(), summary028()];
  const batch = createBatch039(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight039(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
