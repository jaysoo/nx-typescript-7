import { summary002 } from '@org/lib002';
import { summary010 } from '@org/lib010';
import { createBatch013 } from './factory.js';
import { totalWeight013 } from './ops.js';

export function summary013(): { count: number; weight: number } {
  const upstream = [summary002(), summary010()];
  const batch = createBatch013(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight013(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
