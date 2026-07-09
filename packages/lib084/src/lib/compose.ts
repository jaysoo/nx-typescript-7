import { summary079 } from '@org/lib079';
import { summary073 } from '@org/lib073';
import { createBatch084 } from './factory.js';
import { totalWeight084 } from './ops.js';

export function summary084(): { count: number; weight: number } {
  const upstream = [summary079(), summary073()];
  const batch = createBatch084(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight084(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
