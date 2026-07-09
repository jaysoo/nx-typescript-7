import { summary016 } from '@org/lib016';
import { createBatch025 } from './factory.js';
import { totalWeight025 } from './ops.js';

export function summary025(): { count: number; weight: number } {
  const upstream = [summary016()];
  const batch = createBatch025(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight025(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
