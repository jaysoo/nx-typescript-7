import { summary077 } from '@org/lib077';
import { summary075 } from '@org/lib075';
import { createBatch088 } from './factory.js';
import { totalWeight088 } from './ops.js';

export function summary088(): { count: number; weight: number } {
  const upstream = [summary077(), summary075()];
  const batch = createBatch088(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight088(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
