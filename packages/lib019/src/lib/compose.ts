import { summary004 } from '@org/lib004';
import { summary008 } from '@org/lib008';
import { createBatch019 } from './factory.js';
import { totalWeight019 } from './ops.js';

export function summary019(): { count: number; weight: number } {
  const upstream = [summary004(), summary008()];
  const batch = createBatch019(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight019(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
