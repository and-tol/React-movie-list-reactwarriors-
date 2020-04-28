import React, { Component } from 'react';
import { moviesData } from '../../data/moviesData';
import { Movie } from './../../data/moviesData';
import { MovieItem } from '../MovieItem/MovieItem';

interface List {
  movies: Array<Movie>;
}

export class MovieList extends Component<{}, List> {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter((item) => item.id !== movie.id);
    this.state.movies = updateMovies;

    this.setState({
      movies: updateMovies,
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            {this.state.movies.map((movie) => {
              return <MovieItem key={movie.id} movie={movie} removeMovie={this.removeMovie} />;
            })}
          </div>
          <div className="col-3">
            <p>Will Watch 0</p>
          </div>
        </div>
      </div>
    );
  }
}
