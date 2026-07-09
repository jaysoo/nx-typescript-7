import { summary084 } from '@org/lib084';
import { summary088 } from '@org/lib088';
import { createBatch099 } from './factory.js';
import { totalWeight099 } from './ops.js';

export function summary099(): { count: number; weight: number } {
  const upstream = [summary084(), summary088()];
  const batch = createBatch099(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight099(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
