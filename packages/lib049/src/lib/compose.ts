import { summary034 } from '@org/lib034';
import { summary038 } from '@org/lib038';
import { createBatch049 } from './factory.js';
import { totalWeight049 } from './ops.js';

export function summary049(): { count: number; weight: number } {
  const upstream = [summary034(), summary038()];
  const batch = createBatch049(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight049(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
