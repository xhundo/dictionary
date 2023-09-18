import React, { useState, useEffect } from 'react';

export const useFetch = (query: string) => {
  const [definition, setDefinition] = useState<any | null>([]);
  useEffect(() => {
    if (query) {
      query = query.trim().replace('/', '');
      const getDef = async () => {
        try {
          let data = await fetch(import.meta.env.VITE_API_URL.concat(query));
          data = await data.json();
          setDefinition(data);
        } catch (error) {
          console.log(error);
        }
      };

      getDef();
    }
  }, [query]);

  return [definition[0]];
};
