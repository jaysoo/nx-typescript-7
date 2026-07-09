import { summary085 } from '@org/lib085';
import { summary087 } from '@org/lib087';
import { createBatch092 } from './factory.js';
import { totalWeight092 } from './ops.js';

export function summary092(): { count: number; weight: number } {
  const upstream = [summary085(), summary087()];
  const batch = createBatch092(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight092(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
