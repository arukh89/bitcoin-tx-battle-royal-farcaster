import React from 'react';

function Prediction({ prediction, setPrediction, onSubmit }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (prediction >= 2000 && prediction <= 5000) onSubmit();
      }}
      className="space-y-4"
    >
      <input
        type="number"
        min="2000"
        max="5000"
        value={prediction}
        onChange={e => setPrediction(e.target.value)}
        className="w-full px-4 py-2 bg-gray-700 rounded"
        placeholder="Enter transaction count (2000-5000)"
        required
      />
      <button type="submit" className="w-full bg-purple-600 rounded py-2">
        Submit Prediction
      </button>
    </form>
  );
}

export default Prediction;
