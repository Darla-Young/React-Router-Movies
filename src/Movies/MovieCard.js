import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieCard (props) {
  const navigate = useNavigate();
  // console.log(props.movie);
  const { id, title, director, metascore } = props.movie;

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${id}`)} >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
