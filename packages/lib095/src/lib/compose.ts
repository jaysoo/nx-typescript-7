import { summary086 } from '@org/lib086';
import { createBatch095 } from './factory.js';
import { totalWeight095 } from './ops.js';

export function summary095(): { count: number; weight: number } {
  const upstream = [summary086()];
  const batch = createBatch095(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight095(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
