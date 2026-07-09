import { summary026 } from '@org/lib026';
import { createBatch035 } from './factory.js';
import { totalWeight035 } from './ops.js';

export function summary035(): { count: number; weight: number } {
  const upstream = [summary026()];
  const batch = createBatch035(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight035(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
