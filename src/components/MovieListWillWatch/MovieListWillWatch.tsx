import React from 'react';

export interface MovieProps {
  id: number;
  vote_average: number;
  title: string;
}

export const MovieListWillWatch: React.FC<MovieProps> = (props) => {
  const movies = props.moviesWillWatch;

  return (
    <div className='col-3'>
      <h4>Will Watch: {movies.length} movies</h4>
      <ul className='list-group'>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className='list-group-item'>
              <div className='d-flex justify-content-between'>
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
