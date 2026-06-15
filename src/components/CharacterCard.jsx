import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CharacterCard = ({ character }) => {
const [isFavorite, setIsFavorite] = useState(false);

useEffect(() => {
const favorites =
JSON.parse(localStorage.getItem("favorites")) || [];


setIsFavorite(
  favorites.some((item) => item.id === character.id)
);


}, [character.id]);

const toggleFavorite = () => {
const favorites =
JSON.parse(localStorage.getItem("favorites")) || [];


const exists = favorites.some(
  (item) => item.id === character.id
);

let updatedFavorites;

if (exists) {
  updatedFavorites = favorites.filter(
    (item) => item.id !== character.id
  );
} else {
  updatedFavorites = [...favorites, character];
}

localStorage.setItem(
  "favorites",
  JSON.stringify(updatedFavorites)
);

setIsFavorite(!exists);

window.dispatchEvent(
  new Event("favoritesUpdated")
);


};

return ( <article className="card"> <div className="card-image-container"> <img
       className="card-image"
       src={character.image}
       alt={character.name}
     />

    <button
      className="favorite-btn"
      onClick={toggleFavorite}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  </div>

  <div className="card-content">
    <h3>{character.name}</h3>

    <p>
      <strong>Estado:</strong>{" "}
      {character.status}
    </p>

    <p>
      <strong>Especie:</strong>{" "}
      {character.species}
    </p>

    <Link
      className="detail-btn"
      to={`/character/${character.id}`}
    >
      Ver detalle
    </Link>
  </div>
</article>


);
};

export default CharacterCard;
