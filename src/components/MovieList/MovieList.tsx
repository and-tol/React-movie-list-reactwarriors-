import React, { Component } from 'react';
import { moviesData } from '../../data/moviesData';
import { Movie } from './../../data/moviesData';
import { MovieProps, MovieListWillWatch } from '../MovieListWillWatch/MovieListWillWatch';
import { MovieItem } from '../MovieItem/MovieItem';
import { API_URL, API_KEY_3 } from '../../utils/api';
import { MovieTabs } from './../MovieTabs/MovieTabs';
import { Pagination } from '../Pagination/Pagination';

interface List {
  movies: Array<Movie>;
  moviesWillWatch: [];
  sort_by: string;
  total_pages: number;
  currentPage: number;
}

// UI = fn(state, props)

export class MovieList extends Component<List, MovieProps> {
  constructor() {
    super();
    console.log('Constructor');
    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
      sort_by: 'popularity.desc',
      total_pages: 0,
      currentPage: 1,
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    console.log('Did Mount');
    this.getMovies(this.state.currentPage);
  }

  componentDidUpdate(prevProps: List, prevState: List): void {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies(this.state.currentPage);
    }
    if (this.state.currentPage !== prevState.currentPage) {
      this.getMovies(this.state.currentPage);
    }
  }

  getMovies = (page): void => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          total_pages: data.total_pages,
          currentPage: data.page,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  removeMovie = (movie: Movie): void => {
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

  // * Pagination actions
  nextPage = (): void => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };
  previousPage = (): void => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    })
  };

  render() {
    console.log('Render');
    return (
      <>
        <div className='col-9'>
          <div className='row mb-4 mt-4'>
            <div className='col-12'>
              <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
            </div>
          </div>
          <div className='row mb-4 mt-4'>
            <div className='col-12'>
              <Pagination
                total_pages={this.state.total_pages}
                currentPage={this.state.currentPage}
                nextPage={this.nextPage}
                previousPage={this.previousPage}
              />
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
