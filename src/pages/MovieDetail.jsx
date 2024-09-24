import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Use useParams to get the movie ID from the URL

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

function MovieDetail() {
  const { id } = useParams();  // Get the movie ID from the route parameter
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);  // The useEffect will trigger whenever the movie ID changes

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="movie-detail-poster"
      />
      <div className="movie-detail-info">
        <h1>{movie.title}</h1>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}/10</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
