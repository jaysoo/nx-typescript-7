import { createBatch007 } from './factory.js';
import { totalWeight007 } from './ops.js';

export function summary007(): { count: number; weight: number } {
  const batch = createBatch007(25);
  return { count: batch.length, weight: totalWeight007(batch) };
}
