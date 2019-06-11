import * as React from 'react';

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
      </footer>
    );
  }
}
