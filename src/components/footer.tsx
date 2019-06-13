import * as React from 'react';

import { CURRENT_BRANCH } from 'store/modules/app/constants';

// tslint:disable-next-line:no-empty-interface
interface IProps {
}
// tslint:disable-next-line:no-empty-interface
interface IState {
}

export class Footer extends React.Component<IProps, IState> {
  render() {
    return (
      <footer className='Footer'>
        <p>This is the footer</p>
        <p>{CURRENT_BRANCH}</p>
      </footer>
    );
  }
}
