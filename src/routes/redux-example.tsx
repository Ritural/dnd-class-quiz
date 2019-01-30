import * as React from 'react';

import { IExampleState } from 'store/modules/example/reducers';
import { actionIncrementCount, actionSetCount } from 'store/modules/example/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IReducerState } from 'store/main-reducer';

interface IProps extends IExampleState, IDispatchFromProps {
}

// tslint:disable-next-line:no-empty-interface
interface IState {
}

class ReduxExampleClass extends React.Component<IProps, IState> {
 render() {
   const {
     count,
     incrementCount,
     setCount,
   } = this.props;

   return (
     <div className='ReduxExample'>
        <h1>Count: {count}</h1>

        <button className='Button' onClick={() => incrementCount()}>Increment by 1</button>
        <button className='Button Button--secondary' onClick={() => setCount(0)}>Set count to 0</button>
     </div>
   );
 }
}

interface IDispatchFromProps {
  incrementCount: typeof actionIncrementCount;
  setCount: typeof actionSetCount;
}

function mapStateToProps(state: IReducerState) {
  const itemsState = state.exampleState || ({} as IExampleState);

  return {
    count: itemsState.count,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({
    incrementCount: actionIncrementCount,
    setCount: actionSetCount,
  }, dispatch);
}
export const ReduxExample = connect<IExampleState, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(ReduxExampleClass);
