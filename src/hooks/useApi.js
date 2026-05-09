import { useEffect, useState } from 'react';

export function useApi(fetcher) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    fetcher()
      .then((d) => {
        if (!alive) return;
        setData(d);
        setError(null);
      })
      .catch((e) => {
        if (!alive) return;
        setError(e);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  return { data, loading, error };
}
