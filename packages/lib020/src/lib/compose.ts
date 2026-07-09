import { summary001 } from '@org/lib001';
import { createBatch020 } from './factory.js';
import { totalWeight020 } from './ops.js';

export function summary020(): { count: number; weight: number } {
  const upstream = [summary001()];
  const batch = createBatch020(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight020(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
