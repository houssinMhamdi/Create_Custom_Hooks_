import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [pending, isPanding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchdata = async () => {
      isPanding(true);
      try {
        const res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        isPanding(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        }
        isPanding(false);
        setError("Coud not fetch the data");
      }
    };
    fetchdata();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, pending, error };
}

export default useFetch;
