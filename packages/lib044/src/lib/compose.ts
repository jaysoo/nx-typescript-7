import { summary039 } from '@org/lib039';
import { summary033 } from '@org/lib033';
import { createBatch044 } from './factory.js';
import { totalWeight044 } from './ops.js';

export function summary044(): { count: number; weight: number } {
  const upstream = [summary039(), summary033()];
  const batch = createBatch044(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight044(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
