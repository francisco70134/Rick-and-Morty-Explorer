import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [count, setCount] = useState(0);

  const loadCount = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setCount(favorites.length);
  };

  useEffect(() => {
    loadCount();

    window.addEventListener("favoritesUpdated", loadCount);

    return () => {
      window.removeEventListener("favoritesUpdated", loadCount);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>

      <Link to="/favorites">Favoritos ({count})</Link>
    </nav>
  );
};

export default Navbar;
