import { useState } from 'react';

export function useGameState() {
  const [predictions, setPredictions] = useState([]);

  function submitPrediction(prediction, user = 'Guest') {
    setPredictions(prev => [
      ...prev,
      { user, prediction, timestamp: Date.now() }
    ]);
  }

  return { predictions, submitPrediction };
}
