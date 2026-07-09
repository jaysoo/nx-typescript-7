import { summary052 } from '@org/lib052';
import { summary060 } from '@org/lib060';
import { createBatch063 } from './factory.js';
import { totalWeight063 } from './ops.js';

export function summary063(): { count: number; weight: number } {
  const upstream = [summary052(), summary060()];
  const batch = createBatch063(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight063(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
