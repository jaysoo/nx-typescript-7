import { createBatch001 } from './factory.js';
import { totalWeight001 } from './ops.js';

export function summary001(): { count: number; weight: number } {
  const batch = createBatch001(25);
  return { count: batch.length, weight: totalWeight001(batch) };
}
