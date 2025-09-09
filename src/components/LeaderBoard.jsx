import React from 'react';
import { useGameState } from '../hooks/useGameState';

function LeaderBoard() {
  const { predictions } = useGameState();

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <ul>
        {predictions.map((entry, idx) => (
          <li key={idx} className="flex justify-between py-2">
            <span>{entry.user}</span>
            <span>{entry.prediction} tx</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaderBoard;
