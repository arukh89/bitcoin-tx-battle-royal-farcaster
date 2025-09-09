import React, { useState } from 'react';
import { useBitcoinData } from '../hooks/useBitcoinData';
import { useGameState } from '../hooks/useGameState';
import { useFarcasterAuth } from '../hooks/useFarcasterAuth';
import Prediction from './Prediction';

function GameBoard() {
  const { blockHeight, loading } = useBitcoinData();
  const { submitPrediction } = useGameState();
  const { user } = useFarcasterAuth();
  const [prediction, setPrediction] = useState('');

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Predict Next Block's Transactions</h2>
      <div className="mb-4">Current Block: #{blockHeight}</div>
      <Prediction
        prediction={prediction}
        setPrediction={setPrediction}
        onSubmit={() => {
          submitPrediction(Number(prediction), user?.username || 'Guest');
          setPrediction('');
        }}
      />
    </div>
  );
}

export default GameBoard;
