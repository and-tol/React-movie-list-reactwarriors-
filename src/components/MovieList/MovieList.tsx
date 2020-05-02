import React, { Component } from 'react';
import { moviesData } from '../../data/moviesData';
import { Movie } from './../../data/moviesData';
import { MovieProps, MovieListWillWatch } from '../MovieListWillWatch/MovieListWillWatch';
import { MovieItem } from '../MovieItem/MovieItem';
import { API_URL, API_KEY_3 } from '../../utils/api';
import { MovieTabs } from './../MovieTabs/MovieTabs';

interface List {
  movies: Array<Movie>;
  moviesWillWatch: [];
  sort_by: string;
}

// UI = fn(state, props)

export class MovieList extends Component<List, MovieProps> {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
      sort_by: 'popularity.desc',
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps: List, prevState: List): void {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      })
      .catch((err) => {
        console.info('сервер не отвечает');
      });
  };

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

  removeMovieFromWillWatch = (movie: Movie): void => {
    this.setState({
      moviesWillWatch: this.state.moviesWillWatch.filter((item) => item.id !== movie.id),
    });
  };

  updateSortBy = (value: string): void => {
    this.setState({
      sort_by: value,
    });
  };

  render() {
    return (
      <>
        <div className='col-9'>
          <div className='row mb-4 mt-4'>
            <div className='col-12'>
              <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
            </div>
          </div>
          <div className='row'>
            {this.state.movies.map((movie) => {
              return (
                <div key={movie.id} className='col-6 mb-4'>
                  <MovieItem
                    movie={movie}
                    removeMovie={this.removeMovie}
                    addMovieToWillWatch={this.addMovieToWillWatch}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <MovieListWillWatch moviesWillWatch={this.state.moviesWillWatch} />
      </>
    );
  }
}
