import { summary008 } from '@org/lib008';
import { summary004 } from '@org/lib004';
import { createBatch011 } from './factory.js';
import { totalWeight011 } from './ops.js';

export function summary011(): { count: number; weight: number } {
  const upstream = [summary008(), summary004()];
  const batch = createBatch011(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight011(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
