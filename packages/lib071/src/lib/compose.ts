import { summary068 } from '@org/lib068';
import { summary064 } from '@org/lib064';
import { createBatch071 } from './factory.js';
import { totalWeight071 } from './ops.js';

export function summary071(): { count: number; weight: number } {
  const upstream = [summary068(), summary064()];
  const batch = createBatch071(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight071(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
