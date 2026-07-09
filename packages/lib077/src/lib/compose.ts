import { summary070 } from '@org/lib070';
import { summary062 } from '@org/lib062';
import { createBatch077 } from './factory.js';
import { totalWeight077 } from './ops.js';

export function summary077(): { count: number; weight: number } {
  const upstream = [summary070(), summary062()];
  const batch = createBatch077(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight077(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
