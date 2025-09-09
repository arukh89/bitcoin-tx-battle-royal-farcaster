import React from 'react';
import { PRIZE_POOL } from '../config/constants';

function PrizePool() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Prize Pool</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>🥇 First:</span>
          <span>{PRIZE_POOL.first} $SECONDS</span>
        </div>
        <div className="flex justify-between">
          <span>🥈 Second:</span>
          <span>{PRIZE_POOL.second} $SECONDS</span>
        </div>
      </div>
    </div>
  );
}

export default PrizePool;
