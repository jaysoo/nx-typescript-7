import { summary019 } from '@org/lib019';
import { summary013 } from '@org/lib013';
import { createBatch024 } from './factory.js';
import { totalWeight024 } from './ops.js';

export function summary024(): { count: number; weight: number } {
  const upstream = [summary019(), summary013()];
  const batch = createBatch024(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight024(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
