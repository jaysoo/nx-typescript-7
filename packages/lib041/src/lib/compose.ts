import { summary038 } from '@org/lib038';
import { summary034 } from '@org/lib034';
import { createBatch041 } from './factory.js';
import { totalWeight041 } from './ops.js';

export function summary041(): { count: number; weight: number } {
  const upstream = [summary038(), summary034()];
  const batch = createBatch041(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight041(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
