import React, { useState, createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import type { DataContextType } from '../interfaces';

const DataContext = createContext<DataContextType | null>(null);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [query, setQuery] = useState<string>('');
  const [definition] = useFetch(query);
  return (
    <DataContext.Provider value={{ definition, setQuery }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
