import { createBatch008 } from './factory.js';
import { totalWeight008 } from './ops.js';

export function summary008(): { count: number; weight: number } {
  const batch = createBatch008(25);
  return { count: batch.length, weight: totalWeight008(batch) };
}
