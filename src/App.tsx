import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Trending } from "./pages/Trending";
import { Explore } from "./pages/Explore";
import { Movies } from "./pages/Movies";
import { Favorite } from "./pages/Favorite";
import { NoPage } from "./pages/NoPage";
import Sidebar from "./components/Sidebar";
import MovieDetail from "./components/popular/MovieDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Sidebar />
    </Router>
  );
};

export default App;
