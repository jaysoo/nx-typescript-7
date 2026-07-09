import { summary088 } from '@org/lib088';
import { summary084 } from '@org/lib084';
import { createBatch091 } from './factory.js';
import { totalWeight091 } from './ops.js';

export function summary091(): { count: number; weight: number } {
  const upstream = [summary088(), summary084()];
  const batch = createBatch091(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight091(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
