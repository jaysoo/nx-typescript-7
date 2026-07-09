import { summary075 } from '@org/lib075';
import { summary077 } from '@org/lib077';
import { createBatch082 } from './factory.js';
import { totalWeight082 } from './ops.js';

export function summary082(): { count: number; weight: number } {
  const upstream = [summary075(), summary077()];
  const batch = createBatch082(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight082(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
