import { combineReducers, createStore } from 'redux';
import { exampleReducer, IExampleState } from 'state/modules/example/reducer';

export interface IReducerState {
  exampleState?: IExampleState;
}

const rootReducer = combineReducers({
  exampleState: exampleReducer,
});

// export const REDUX_INITIAL_STATE: IReducerState = {
//   exampleState: EXAMPLE_INITIAL_STATE,
// };

export const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
