import React, { Component } from 'react';
import { moviesData } from '../../data/moviesData';
import { Movie } from './../../data/moviesData';
import { MovieProps, MovieListWillWatch } from '../MovieListWillWatch/MovieListWillWatch';
import { MovieItem } from '../MovieItem/MovieItem';
import { API_URL, API_KEY_3 } from '../../utils/api';

interface List {
  movies: Array<Movie>;
  moviesWillWatch: [];
}

// UI = fn(state, props)

export class MovieList extends Component<List, MovieProps> {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    console.log('didMount');
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
      .then((response) => {
        console.log('then');
        return response.json();
      })
      .then((data) => {
        console.log('data', data.results);
        this.setState({
          movies: data.results
        });
      }).catch((err)=> {
        console.info('сервер не отвечает')
      })
    console.log('after fetch');
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

  removeMovieFromWillWatch = (movie: Movie): void => {
    this.setState({
      moviesWillWatch: this.state.moviesWillWatch.filter((item) => item.id !== movie.id),
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
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <MovieListWillWatch moviesWillWatch={this.state.moviesWillWatch} />
          {/* <div className='col-3'>
            <p>Will Watch {this.state.moviesWillWatch.length}</p>
          </div> */}
        </div>
      </div>
    );
  }
}
