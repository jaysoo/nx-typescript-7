import { summary012 } from '@org/lib012';
import { summary020 } from '@org/lib020';
import { createBatch023 } from './factory.js';
import { totalWeight023 } from './ops.js';

export function summary023(): { count: number; weight: number } {
  const upstream = [summary012(), summary020()];
  const batch = createBatch023(25);
  return {
    count: batch.length + upstream.reduce((sum, s) => sum + s.count, 0),
    weight: totalWeight023(batch) + upstream.reduce((sum, s) => sum + s.weight, 0),
  };
}
