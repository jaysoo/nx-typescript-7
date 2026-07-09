import { summary089 } from '@org/lib089';
import { summary083 } from '@org/lib083';
import { createBatch094 } from './factory.js';
import { totalWeight094 } from './ops.js';

export function summary094(): { count: number; weight: number } {
  const upstream = [summary089(), summary083()];
  const batch = createBatch094(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight094(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
