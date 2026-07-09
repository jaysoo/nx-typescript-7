import { summary083 } from '@org/lib083';
import { summary089 } from '@org/lib089';
import { createBatch096 } from './factory.js';
import { totalWeight096 } from './ops.js';

export function summary096(): { count: number; weight: number } {
  const upstream = [summary083(), summary089()];
  const batch = createBatch096(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight096(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
