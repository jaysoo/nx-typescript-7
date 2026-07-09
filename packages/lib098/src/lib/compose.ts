import { summary087 } from '@org/lib087';
import { summary085 } from '@org/lib085';
import { createBatch098 } from './factory.js';
import { totalWeight098 } from './ops.js';

export function summary098(): { count: number; weight: number } {
  const upstream = [summary087(), summary085()];
  const batch = createBatch098(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight098(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
