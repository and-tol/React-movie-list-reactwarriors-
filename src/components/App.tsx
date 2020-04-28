import React, { Component } from 'react';
import { MovieList } from './MovieList/MovieList';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesWillWatch: [],
    };
  }

  render() {
    return (
      <>
        <MovieList />
      </>
    );
  }
}
