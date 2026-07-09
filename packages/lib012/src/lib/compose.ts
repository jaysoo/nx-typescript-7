import { summary005 } from '@org/lib005';
import { summary007 } from '@org/lib007';
import { createBatch012 } from './factory.js';
import { totalWeight012 } from './ops.js';

export function summary012(): { count: number; weight: number } {
  const upstream = [summary005(), summary007()];
  const batch = createBatch012(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight012(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
