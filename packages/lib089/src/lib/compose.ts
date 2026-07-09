import { summary074 } from '@org/lib074';
import { summary078 } from '@org/lib078';
import { createBatch089 } from './factory.js';
import { totalWeight089 } from './ops.js';

export function summary089(): { count: number; weight: number } {
  const upstream = [summary074(), summary078()];
  const batch = createBatch089(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight089(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
