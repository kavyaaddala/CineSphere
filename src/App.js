import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PopularMovies from './pages/PopularMovies';
import TopRatedMovies from './pages/TopRatedMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import MovieDetail from './pages/MovieDetail';
import './style.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>Movie App</h1>
        <ul>
          <li><Link to="/">Popular Movies</Link></li>
          <li><Link to="/top-rated">Top Rated Movies</Link></li>
          <li><Link to="/upcoming">Upcoming Movies</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/movie/:id" element={<MovieDetail />} /> {/* Route for Movie Details */}
      </Routes>
    </Router>
  );
}

export default App;
