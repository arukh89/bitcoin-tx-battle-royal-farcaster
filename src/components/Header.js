import React from 'react';
import { useFarcasterAuth } from '../hooks/useFarcasterAuth';

function Header() {
  const { user, login, logout } = useFarcasterAuth();

  return (
    <header className="bg-gray-800 py-4 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        <h1 className="text-2xl font-bold">Bitcoin Battle</h1>
      </div>
      {user ? (
        <div className="flex items-center gap-4">
          <span>{user.username}</span>
          <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">Disconnect</button>
        </div>
      ) : (
        <button onClick={login} className="bg-purple-600 px-4 py-2 rounded">Connect Farcaster</button>
      )}
    </header>
  );
}

export default Header;
