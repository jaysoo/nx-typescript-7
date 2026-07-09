import { summary015 } from '@org/lib015';
import { summary017 } from '@org/lib017';
import { createBatch022 } from './factory.js';
import { totalWeight022 } from './ops.js';

export function summary022(): { count: number; weight: number } {
  const upstream = [summary015(), summary017()];
  const batch = createBatch022(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight022(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
