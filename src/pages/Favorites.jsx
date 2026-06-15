import CharacterCard from "../components/CharacterCard";
import { useFavorites } from "../hooks/useFavorites";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <main>
      <h1>Mis Favoritos</h1>

      {favorites.length === 0 && (
        <p className="empty-message">
          No tienes personajes favoritos.
        </p>
      )}

      <div className="characters-grid">
        {favorites.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </main>
  );
};

export default Favorites;