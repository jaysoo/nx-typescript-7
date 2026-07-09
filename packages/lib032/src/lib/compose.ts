import { summary025 } from '@org/lib025';
import { summary027 } from '@org/lib027';
import { createBatch032 } from './factory.js';
import { totalWeight032 } from './ops.js';

export function summary032(): { count: number; weight: number } {
  const upstream = [summary025(), summary027()];
  const batch = createBatch032(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight032(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
