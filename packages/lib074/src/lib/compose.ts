import { summary069 } from '@org/lib069';
import { summary063 } from '@org/lib063';
import { createBatch074 } from './factory.js';
import { totalWeight074 } from './ops.js';

export function summary074(): { count: number; weight: number } {
  const upstream = [summary069(), summary063()];
  const batch = createBatch074(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight074(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
