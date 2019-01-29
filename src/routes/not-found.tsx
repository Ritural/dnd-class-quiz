import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
interface IProps {
}
// tslint:disable-next-line:no-empty-interface
interface IState {
}

export class NotFound extends React.Component<IProps, IState> {
  render() {
    return (
      <div className='NotFound'>
        <p>Route not found :(</p>
      </div>
    );
  }
}
