import React, { useState, createContext, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import type { DataContextType } from '../interfaces';

const DataContext = createContext<DataContextType | null>(null);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [query, setQuery] = useState<string>('');
  const [data, errors] = useFetch(query);
  let definition;

  if (data && 'phonetics' in data) {
    data.phonetics = data['phonetics'].filter(
      ({ audio }: { audio: string }) => {
        return audio.length > 1;
      }
    );

    definition = { ...data };
  }

  return (
    <DataContext.Provider value={{ definition, setQuery, errors }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
