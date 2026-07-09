import { summary017 } from '@org/lib017';
import { summary015 } from '@org/lib015';
import { createBatch028 } from './factory.js';
import { totalWeight028 } from './ops.js';

export function summary028(): { count: number; weight: number } {
  const upstream = [summary017(), summary015()];
  const batch = createBatch028(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight028(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
