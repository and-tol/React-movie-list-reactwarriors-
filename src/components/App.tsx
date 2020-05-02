import React, { Component } from 'react';
import { MovieList } from './MovieList/MovieList';
import { MovieListWillWatch } from './MovieListWillWatch/MovieListWillWatch';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesWillWatch: [],
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <MovieList />
        </div>
      </div>
    );
  }
}
