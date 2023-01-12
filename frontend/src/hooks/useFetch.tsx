import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setDate] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setDate(res.data);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setDate(res.data);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
