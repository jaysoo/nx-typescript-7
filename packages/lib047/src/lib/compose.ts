import { summary040 } from '@org/lib040';
import { summary032 } from '@org/lib032';
import { createBatch047 } from './factory.js';
import { totalWeight047 } from './ops.js';

export function summary047(): { count: number; weight: number } {
  const upstream = [summary040(), summary032()];
  const batch = createBatch047(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight047(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
