import React, { Component } from 'react';
import { moviesData } from '../../data/moviesData';

export class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
    };
  }
  
  render() {
    return (
      <div>
        {this.state.movies.map((movie, key) => {
          return (
            <div key={movie.id} className='card' style={{ width: '100%' }}>
              <img className='card-img-top' src={movie.poster_path} />
              <div className='card-body'>
                <h6 className='card-title'>{movie.title}</h6>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>Rating: {movie.vote_average}</p>
                  <button type='button' href='#' className='btn btn-primary'>Will Watch</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
