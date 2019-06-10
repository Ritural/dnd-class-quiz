import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store/main-reducer';
import {
  actionIncrementCount,
  actionSetCount,
} from 'store/modules/example/actions';

interface IProps {
  count: number;
  incrementCount: typeof actionIncrementCount;
  setCount: typeof actionSetCount;
}

export class Presenter extends React.Component<IProps> {
  render() {
    const { count, incrementCount, setCount } = this.props;

    return (
      <div className='ReduxExample'>
        <h1>Count: {count}</h1>

        <button className='Button' onClick={() => incrementCount()}>
          Increment by 1
        </button>
        <button
          className='Button Button--secondary'
          onClick={() => setCount(0)}
        >
          Set count to 0
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    count: state.exampleState.count,
  };
}

const dispatchProps = {
  incrementCount: actionIncrementCount,
  setCount: actionSetCount,
};

export const ReduxExample = connect(
  mapStateToProps,
  dispatchProps,
)(Presenter);
