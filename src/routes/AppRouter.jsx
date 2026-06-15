import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CharacterDetail from "../pages/CharacterDetail";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/character/:id"
          element={<CharacterDetail />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;