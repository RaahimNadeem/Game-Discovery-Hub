import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import GenreList from "../components/GenreList";

interface Genre {
    id: number; 
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

// Effect hook to send the fetech requests to the back-end
  useEffect(() => {
    // handling cancellations
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading};
}

export default useGenres;