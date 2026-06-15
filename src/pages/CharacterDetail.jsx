import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../api/rickMortyApi";

const CharacterDetail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const loadCharacter = async () => {
      const data = await getCharacterById(id);

      setCharacter(data);

      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      setIsFavorite(favorites.some((item) => item.id === data.id));
    };

    loadCharacter();
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.some((item) => item.id === character.id);

    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter((item) => item.id !== character.id);
    } else {
      updatedFavorites = [...favorites, character];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setIsFavorite(!exists);

    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  if (!character) {
    return <h2>Cargando personaje...</h2>;
  }

  return (
    <main className="detail-container">
      <Link className="back-btn" to="/">
        ← Volver
      </Link>

      <div className="detail-card">
        <img
          className="detail-image"
          src={character.image}
          alt={character.name}
        />

        <div className="detail-content">
          <div className="detail-header">
            <h1>{character.name}</h1>

            <button className="detail-favorite-btn" onClick={toggleFavorite}>
              {isFavorite ? "★" : "☆"}
            </button>
          </div>

          <div className="detail-info">
            <p>
              <strong>Estado:</strong> {character.status}
            </p>

            <p>
              <strong>Especie:</strong> {character.species}
            </p>

            <p>
              <strong>Género:</strong> {character.gender}
            </p>

            <p>
              <strong>Origen:</strong> {character.origin.name}
            </p>

            <p>
              <strong>Ubicación:</strong> {character.location.name}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharacterDetail;
