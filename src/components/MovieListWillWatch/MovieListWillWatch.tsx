import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MovieProps {
  id: number;
  vote_average: number;
  title: string;
}

export const MovieListWillWatch: React.FC<MovieProps> = () => {
  return (
    <div>
      <h4>Will Watch: 1 movies</h4>
      <ul className='list-group'>
        <li key={'1'} className='list-group-item'>
          <div className='d-flex justify-content-between'>
            <div></div>
            <div></div>
          </div>
          Cras justo odio
        </li>
      </ul>
    </div>
  );
};
