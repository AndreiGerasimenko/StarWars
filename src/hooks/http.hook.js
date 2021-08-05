import { useState, useCallback } from "react";
import axios from "axios";

const baseURL = "https://swapi.dev/api/";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url, method = "get", data = null, headers = {}) => {
      setLoading(true);
      try {
        const response = await axios({ url, method, data, headers, baseURL });

        setLoading(false);

        return response;
      } catch (e) {
        setLoading(false);
        throw e;
      }
    },
    []
  );

  return { loading, request };
};
