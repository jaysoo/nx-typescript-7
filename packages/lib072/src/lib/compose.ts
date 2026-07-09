import { summary065 } from '@org/lib065';
import { summary067 } from '@org/lib067';
import { createBatch072 } from './factory.js';
import { totalWeight072 } from './ops.js';

export function summary072(): { count: number; weight: number } {
  const upstream = [summary065(), summary067()];
  const batch = createBatch072(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight072(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
