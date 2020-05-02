import React from 'react';
import { Movie } from './../../data/moviesData';

interface MovieItemProps {
  movie: Movie;
  removeMovie: func;
  addMovieToWillWatch: func;
  removeMovieFromWillWatch: func;
  // onClick: (x: number, y: number) => void;
  // onClick: addMovieToWillWatch(movie: Movie);
  // onClick: removeMovie(movie: Movie);
}

interface Item {
  willWatch: false;
}

export class MovieItem extends React.Component<Item, MovieItemProps> {
  constructor(parameters) {
    super();

    this.state = {
      willWatch: false,
    };
  }

  componentWillUnmount(){
    console.log('unmount');
  }

  render() {
    const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    const url: string = 'https://image.tmdb.org/t/p/w500';

    return (
      <div className='card' style={{ width: '100%' }}>
        <img className='card-img-top' src={`${url}${movie.poster_path || movie.poster_path}`} />
        <div className='card-body'>
          <h6 className='card-title'>{movie.title}</h6>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='mb-0'>Rating: {movie.vote_average}</p>
            {this.state.willWatch ? (
              <button type='button' className='btn btn-success' onClick={()=>{
                removeMovieFromWillWatch(movie)
                this.setState({
                  willWatch: false
                })
              }}>
                Remove Will Watch
              </button>
            ) : (
              <button
                onClick={() => {
                  this.setState({
                    willWatch: true,
                  });
                  addMovieToWillWatch(movie);
                }}
                type='button'
                className='btn btn-secondary'>
                Add Will Watch
              </button>
            )}
            <button onClick={removeMovie.bind(null, movie)} type='button' className='btn btn-warning'>
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}
