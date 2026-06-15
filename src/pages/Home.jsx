import { useState, useEffect } from "react";

import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import Filters from "../components/Filters";
import Loader from "../components/Loader";

import { useCharacters } from "../hooks/useCharacters";

const Home = () => {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    name: "",
    status: "",
    gender: "",
  });

  // Cuando cambian los filtros vuelve a la página 1
  useEffect(() => {
    setPage(1);
  }, [filters]);

  const { characters, pages, loading } = useCharacters(page, filters);

  return (
    <main>
      <div className="header-section">
        <h1>Rick and Morty Explorer</h1>

        <Filters filters={filters} setFilters={setFilters} />
      </div>

      <Pagination
        currentPage={page}
        totalPages={pages}
        onPageChange={setPage}
      />

      {loading && <Loader />}

      {!loading && characters.length === 0 && (
        <p>No se encontraron personajes.</p>
      )}

      <div className="characters-grid">
        {!loading &&
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={pages}
        onPageChange={setPage}
      />
    </main>
  );
};

export default Home;
