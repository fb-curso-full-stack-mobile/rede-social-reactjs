import { useCallback, useEffect, useState } from "react";

export function useFetch<T = unknown>(
  endpoint?: string,
  method = "GET",
  data: any = {},
  headers: any = {}
) {
  const [response, setResponse] = useState<T | null>();
  const [error, setError] = useState<string | null>();
  const [fetching, setFetching] = useState(false);

  const request = useCallback(
    async (
      endpoint: string,
      method = "GET",
      data: any = {},
      headers: any = {}
    ) => {
      return new Promise<T>((resolve) => {
        let authorization: any = {};
        const token = localStorage.getItem("token");
        if (token) {
          authorization = {
            Authorization: `Bearer ${token}`,
          };
        }
        const options: any = {
          headers: {
            "Content-Type": "application/json",
            ...headers,
            ...authorization,
          },
          method,
        };
        if (method !== "GET") {
          options.body = JSON.stringify(data);
        }
        const baseUrl = `${import.meta.env.VITE_API_BASE_URL}`;
        const url = `${baseUrl}${endpoint}`;
        setFetching(true);
        fetch(url, options)
          .then(async (response) => {
            const json = await response.json();
            if (!response.ok) {
              setError(json.message);
            }
            if (json.newToken) {
              localStorage.setItem("token", json.newToken);
            }
            setResponse(json);
            resolve(json);
          })
          .catch((e) => setError(e))
          .finally(() => setFetching(false));
      });
    },
    []
  );

  const clear = () => {
    setError(null);
    setResponse(null);
  };

  useEffect(() => {
    if (!endpoint) {
      return;
    }
    request(endpoint, method, data, headers);
  }, [data, endpoint, headers, method, request]);

  return { request, response, error, fetching, clear };
}
