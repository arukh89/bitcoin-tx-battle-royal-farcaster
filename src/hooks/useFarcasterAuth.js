import { useState } from 'react';
// TODO: Replace with Farcaster AuthKit integration for production!
export function useFarcasterAuth() {
  const [user, setUser] = useState(null);

  const login = async () => {
    // Replace with AuthKit logic
    setUser({ username: 'farcaster_user' });
  };

  const logout = () => setUser(null);

  return { user, login, logout };
}
