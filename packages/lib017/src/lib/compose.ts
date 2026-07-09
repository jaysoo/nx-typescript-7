import { summary010 } from '@org/lib010';
import { summary002 } from '@org/lib002';
import { createBatch017 } from './factory.js';
import { totalWeight017 } from './ops.js';

export function summary017(): { count: number; weight: number } {
  const upstream = [summary010(), summary002()];
  const batch = createBatch017(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight017(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
