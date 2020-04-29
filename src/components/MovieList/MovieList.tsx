import React, { Component } from 'react';
import { moviesData } from '../../data/moviesData';
import { Movie } from './../../data/moviesData';
import { MovieItem } from '../MovieItem/MovieItem';

interface List {
  movies: Array<Movie>;
  moviesWillWatch: [];
}

// UI = fn(state, props)

export class MovieList extends Component<{}, List> {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = (movie: Movie): void => {
    // const updateMovies = this.state.movies.filter((item) => item.id !== movie.id);
    // this.state.movies = updateMovies;

    this.setState({
      movies: this.state.movies.filter((item) => item.id !== movie.id),
    });
  };

  addMovieToWillWatch = (movie: Movie): void => {
    // const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    // updateMoviesWillWatch.push(movie)
    this.setState({
      moviesWillWatch: [...this.state.moviesWillWatch, movie],
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <div className='row'>
              {this.state.movies.map((movie) => {
                return (
                  <div key={movie.id} className='col-6 mb-4'>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='col-3'>
            <p>Will Watch {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}
