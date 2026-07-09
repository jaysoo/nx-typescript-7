import { summary073 } from '@org/lib073';
import { summary079 } from '@org/lib079';
import { createBatch086 } from './factory.js';
import { totalWeight086 } from './ops.js';

export function summary086(): { count: number; weight: number } {
  const upstream = [summary073(), summary079()];
  const batch = createBatch086(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight086(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
