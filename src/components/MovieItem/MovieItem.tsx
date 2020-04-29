import React from 'react';
import { Movie } from './../../data/moviesData';

interface MovieItemProps {
  movie: Movie;
  removeMovie: func;
  addMovieToWillWatch: func;
}

export const MovieItem: React.FC<MovieItemProps> = (props) => {
  const { movie, removeMovie, addMovieToWillWatch } = props;
  const url: string = "https://image.tmdb.org/t/p/w500"

  return (
    <div className='card' style={{ width: '100%' }}>
      <img className='card-img-top' src={`${url}${movie.poster_path || movie.poster_path}`} />
      <div className='card-body'>
        <h6 className='card-title'>{movie.title}</h6>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='mb-0'>Rating: {movie.vote_average}</p>
          <button onClick={addMovieToWillWatch.bind(null, movie)} type='button' className='btn btn-success'>
            Will Watch
          </button>
          <button onClick={removeMovie.bind(null, movie)} type='button' className='btn btn-warning'>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
