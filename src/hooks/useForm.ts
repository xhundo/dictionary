import React, { useState } from 'react';
import { useFetch } from './useFetch';
import type { Error } from '../interfaces';

export const useForm = () => {
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<Error>({ error: '', isError: false });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent, query: (query: string) => void) => {
    e.preventDefault();
    if (search.length === 0) {
      setError({ error: "Whoops, can't be empty...", isError: true });
    } else {
      setError({ error: '', isError: false });
      query(search);
      setSearch('');
    }
  };

  return { search, error, handleSearch, handleSubmit };
};
