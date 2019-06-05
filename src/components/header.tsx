import * as React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <Link className='' to='/'>
          Home
        </Link>
        <Link className='u-pL-lg' to='/redux-example'>
          Redux Example
        </Link>
      </header>
    );
  }
}
