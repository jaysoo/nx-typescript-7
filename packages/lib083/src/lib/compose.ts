import { summary072 } from '@org/lib072';
import { summary080 } from '@org/lib080';
import { createBatch083 } from './factory.js';
import { totalWeight083 } from './ops.js';

export function summary083(): { count: number; weight: number } {
  const upstream = [summary072(), summary080()];
  const batch = createBatch083(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight083(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
