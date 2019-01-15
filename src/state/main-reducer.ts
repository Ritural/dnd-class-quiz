import { combineReducers } from 'redux';
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

export default rootReducer;
