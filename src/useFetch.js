import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 2000);
  }, [endpoint]);

  return {
    data,
    isPending,
    error
  };
};

export default useFetch;
