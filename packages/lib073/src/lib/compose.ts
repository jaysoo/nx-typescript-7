import { summary062 } from '@org/lib062';
import { summary070 } from '@org/lib070';
import { createBatch073 } from './factory.js';
import { totalWeight073 } from './ops.js';

export function summary073(): { count: number; weight: number } {
  const upstream = [summary062(), summary070()];
  const batch = createBatch073(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight073(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
