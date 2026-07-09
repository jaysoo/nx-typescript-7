import { summary013 } from '@org/lib013';
import { summary019 } from '@org/lib019';
import { createBatch026 } from './factory.js';
import { totalWeight026 } from './ops.js';

export function summary026(): { count: number; weight: number } {
  const upstream = [summary013(), summary019()];
  const batch = createBatch026(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight026(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
