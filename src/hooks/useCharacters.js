import { useEffect, useState } from "react";
import { getCharacters } from "../api/rickMortyApi";

export const useCharacters = (page, filters) => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);

      try {
        const data = await getCharacters(page, filters);

        setCharacters(data.results || []);
        setPages(data.info?.pages || 0);
      } catch (error) {
        setCharacters([]);
        setPages(0);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [page, filters]);

  return {
    characters,
    pages,
    loading,
  };
};