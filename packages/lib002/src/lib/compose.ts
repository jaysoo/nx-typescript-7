import { createBatch002 } from './factory.js';
import { totalWeight002 } from './ops.js';

export function summary002(): { count: number; weight: number } {
  const batch = createBatch002(25);
  return { count: batch.length, weight: totalWeight002(batch) };
}
