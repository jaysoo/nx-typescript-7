import { summary027 } from '@org/lib027';
import { summary025 } from '@org/lib025';
import { createBatch038 } from './factory.js';
import { totalWeight038 } from './ops.js';

export function summary038(): { count: number; weight: number } {
  const upstream = [summary027(), summary025()];
  const batch = createBatch038(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight038(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
