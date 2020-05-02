import React from 'react';

import './MovieTabs.css';
import { render } from 'react-dom';

interface MovieTabsProps {
  sort_by: string;
  updateSortBy: func;
}

export class MovieTabs extends React.Component<MovieTabsProps> {
  shouldComponentUpdate(nextProps: {}, nextState: {}): boolean {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    }
    return false;
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = (value: string): void => () => {
      updateSortBy(value);
    };

    const setClassByValue = (value: string): string => {
      return `nav-link ${sort_by === value ? 'active' : ''}`;
    };

    return (
      <ul className='tabs nav nav-pills'>
        <li className='nav-item'>
          <div className={setClassByValue('popularity.desc')} onClick={handleClick('popularity.desc')}>
            Popularity desc
          </div>
        </li>
        <li className='nav-item'>
          <div className={setClassByValue('revenue.desc')} onClick={handleClick('revenue.desc')}>
            Revenue desc
          </div>
        </li>
        <li className='nav-item'>
          <div className={setClassByValue('vote_average.desc')} onClick={handleClick('vote_average.desc')}>
            Vote average desc
          </div>
        </li>
      </ul>
    );
  }
}
