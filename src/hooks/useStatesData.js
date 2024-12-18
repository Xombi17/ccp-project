import { useState, useEffect } from 'react';
import statesData from '../data/states_data.json';

export function useStatesData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(statesData);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  return {
    statesData: data,
    isLoading,
    error
  };
}