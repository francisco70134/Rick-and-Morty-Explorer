# Rick and Morty Explorer

Aplicación web desarrollada con React que consume la API pública de Rick and Morty para visualizar personajes, explorar información detallada, aplicar filtros y gestionar una lista de favoritos.

## Vista previa

Aplicación desplegada en Vercel:

https://rick-and-morty-explorer-zeta.vercel.app/

## Características

* Listado completo de personajes de Rick and Morty.
* Visualización detallada de cada personaje.
* Sistema de paginación.
* Búsqueda de personajes por nombre.
* Filtrado por género.
* Gestión de favoritos utilizando Local Storage.
* Página exclusiva para personajes favoritos.
* Diseño responsive para diferentes dispositivos.

## Tecnologías utilizadas

* React
* Vite
* React Router DOM
* JavaScript (ES6+)
* CSS3
* Rick and Morty API
* Vercel

## API utilizada

Este proyecto consume la API pública de Rick and Morty:

https://rickandmortyapi.com/

Documentación oficial:

https://rickandmortyapi.com/documentation

## Estructura del proyecto

```text
src
│
├── api
│   └── rickMortyApi.js
│
├── components
│   ├── CharacterCard.jsx
│   ├── Filters.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   └── Pagination.jsx
│
├── hooks
│   ├── useCharacters.js
│   └── useFavorites.js
│
├── pages
│   ├── Home.jsx
│   ├── CharacterDetail.jsx
│   ├── Favorites.jsx
│   └── NotFound.jsx
│
├── routes
│   └── AppRouter.jsx
│
├── styles
│   └── global.css
│
├── App.jsx
└── main.jsx
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/francisco70134/Rick-and-Morty-Explorer.git
```

Ingresar al proyecto:

```bash
cd Rick-and-Morty-Explorer
```

Instalar dependencias:

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

## Generar versión de producción

```bash
npm run build
```

## Vista previa de producción

```bash
npm run preview
```

## Despliegue

Proyecto desplegado en Vercel:

https://rick-and-morty-explorer-zeta.vercel.app/

## Repositorio

https://github.com/francisco70134/Rick-and-Morty-Explorer

## Autor

Francisco Olortegui

Proyecto desarrollado como evaluación final de React utilizando componentes reutilizables, hooks personalizados, React Router y consumo de APIs externas.
