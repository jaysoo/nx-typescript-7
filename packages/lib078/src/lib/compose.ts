import { summary067 } from '@org/lib067';
import { summary065 } from '@org/lib065';
import { createBatch078 } from './factory.js';
import { totalWeight078 } from './ops.js';

export function summary078(): { count: number; weight: number } {
  const upstream = [summary067(), summary065()];
  const batch = createBatch078(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight078(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
