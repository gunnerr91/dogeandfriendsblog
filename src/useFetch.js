import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(endpoint, { signal: abortController.signal })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 500);
    return () => abortController.abort();
  }, [endpoint]);

  return {
    data,
    isPending,
    error
  };
};

export default useFetch;
