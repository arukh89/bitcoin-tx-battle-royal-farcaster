import React from 'react';
import { AuthKitProvider } from '@farcaster/auth-kit';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import LeaderBoard from './components/LeaderBoard';
import PrizePool from './components/PrizePool';
import './index.css';

function App() {
  return (
    <AuthKitProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <GameBoard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <LeaderBoard />
            <PricePool />
          </div>
        </main>
      </div>
    </AuthKitProvider>
  );
}

export default App;
