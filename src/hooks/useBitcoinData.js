import { useState, useEffect } from 'react';
import axios from 'axios';

export function useBitcoinData() {
  const [blockHeight, setBlockHeight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeight() {
      try {
        const res = await axios.get('https://mempool.space/api/blocks/tip/height');
        setBlockHeight(res.data);
      } finally {
        setLoading(false);
      }
    }
    fetchHeight();
    const interval = setInterval(fetchHeight, 60000);
    return () => clearInterval(interval);
  }, []);

  return { blockHeight, loading };
}
