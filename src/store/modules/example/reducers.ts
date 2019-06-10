import {
  ExampleActionTypes,
  INCREMENT_COUNT,
  SET_COUNT,
} from 'store/modules/example/actions';

export interface IExampleState {
  count: number;
}

export const INITIAL_STATE: IExampleState = {
  count: 0,
};

export function exampleReducer(
  state = INITIAL_STATE,
  action: ExampleActionTypes,
) {
  switch (action.type) {
    case INCREMENT_COUNT:
      const count = state.count + 1;

      return {
        ...state,
        count,
      };
    case SET_COUNT:
      const newCount = action.payload;

      return {
        ...state,
        count: newCount,
      };
    default:
      return state;
  }
}
