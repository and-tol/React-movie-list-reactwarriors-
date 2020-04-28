import React from 'react';

interface MovieItemProps {
  movie: {};
  key: number;
}

export const MovieItem: React.FC<MovieItemProps> = (props) => {
  const { movie, removeMovie } = props;

  return (
    <div className='card' style={{ width: '100%' }}>
      <img className='card-img-top' src={movie.poster_path} />
      <div className='card-body'>
        <h6 className='card-title'>{movie.title}</h6>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='mb-0'>Rating: {movie.vote_average}</p>
          <button onClick={removeMovie.bind(null, movie)} type='button' href='#' className='btn btn-primary'>
            Will Watch
          </button>
        </div>
      </div>
    </div>
  );
};
