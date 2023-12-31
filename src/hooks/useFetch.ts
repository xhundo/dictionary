import { useState, useEffect } from 'react';

export const useFetch = (query: string) => {
  const [definition, setDefinition] = useState<any | null>([]);
  const [error, setError] = useState<any | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  // Custom fetch hook
  useEffect(() => {
    if (query) {
      query = query.trim().replace('/', '');

      (async () => {
        try {
          let data = await fetch(API_URL.concat(query)),
            res = await data.json(),
            entries = Object.keys(res);
          if (entries.includes('message')) throw res;
          else setDefinition(res);
          setError(null);
        } catch (error) {
          setError(error);
          setDefinition([]);
        }
      })();
    } else {
      setDefinition([]);
    }
  }, [query]);

  return [definition[0], error];
};
