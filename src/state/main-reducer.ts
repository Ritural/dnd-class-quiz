import { combineReducers, createStore } from 'redux';
import ExampleReducer, { IExampleState } from 'state/reducers/example';

export interface IReducerState {
  exampleState?: IExampleState;
}

const rootReducer = combineReducers({
  exampleState: ExampleReducer,
});

// export const REDUX_INITIAL_STATE: IReducerState = {
//   exampleState: EXAMPLE_INITIAL_STATE,
// };

export default createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
