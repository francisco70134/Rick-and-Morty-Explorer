import { useEffect, useState } from "react";

const STORAGE_KEY = "favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      ) || [];

    setFavorites(storedFavorites);
  }, []);

  const saveFavorites = (items) => {
    setFavorites(items);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  };

  const toggleFavorite = (character) => {
    const exists = favorites.some(
      (item) => item.id === character.id
    );

    if (exists) {
      saveFavorites(
        favorites.filter(
          (item) => item.id !== character.id
        )
      );
    } else {
      saveFavorites([
        ...favorites,
        character,
      ]);
    }
  };

  const isFavorite = (id) => {
    return favorites.some(
      (item) => item.id === id
    );
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};