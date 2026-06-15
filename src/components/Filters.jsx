const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Buscar personaje"
        value={filters.name}
        onChange={handleChange}
      />

      <select name="gender" value={filters.gender} onChange={handleChange}>
        <option value="">Todos los géneros</option>

        <option value="male">Masculino</option>

        <option value="female">Femenino</option>

        <option value="genderless">Sin género</option>

        <option value="unknown">Desconocido</option>
      </select>
    </div>
  );
};

export default Filters;
