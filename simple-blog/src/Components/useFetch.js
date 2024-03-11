import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const AbortConst = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: AbortConst.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Failed to fetch resource!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Aborted!");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);

    return () => {
      AbortConst.abort();
    };
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
