import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
interface IProps {}
// tslint:disable-next-line:no-empty-interface
interface IState {}

export class Home extends React.Component<IProps, IState> {
  render() {
    return (
      <div className='Home'>
        <h1>DnD 5th Edition Class Quiz</h1>
      </div>
    );
  }
}
