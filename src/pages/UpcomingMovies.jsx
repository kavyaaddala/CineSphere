import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link

const API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1';

function UpcomingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      

      {/* Movie Grid */}
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </Link>
      
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingMovies;
