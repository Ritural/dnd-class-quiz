import * as React from 'react';
import { Link } from 'react-router-dom';

import { MENU_LINKS } from 'store/modules/app/constants';

export class Header extends React.Component {
  render() {
    return (
      <header className='Header'>

        {MENU_LINKS.map(({ to, label }) => (
          <Link className='Header-link' to={to} key={label}>
            {label}
          </Link>
        ))}
      </header>
    );
  }
}
