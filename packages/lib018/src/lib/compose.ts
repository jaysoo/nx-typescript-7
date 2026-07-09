import { summary007 } from '@org/lib007';
import { summary005 } from '@org/lib005';
import { createBatch018 } from './factory.js';
import { totalWeight018 } from './ops.js';

export function summary018(): { count: number; weight: number } {
  const upstream = [summary007(), summary005()];
  const batch = createBatch018(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight018(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
