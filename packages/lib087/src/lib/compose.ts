import { summary080 } from '@org/lib080';
import { summary072 } from '@org/lib072';
import { createBatch087 } from './factory.js';
import { totalWeight087 } from './ops.js';

export function summary087(): { count: number; weight: number } {
  const upstream = [summary080(), summary072()];
  const batch = createBatch087(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight087(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
