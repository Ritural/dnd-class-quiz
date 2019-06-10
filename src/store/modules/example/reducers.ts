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
      const newCount = state.count + 1;
      return {
        ...state,
        count: newCount,
      };
    case SET_COUNT:
      const { count } = action.payload;

      return {
        ...state,
        count,
      };
    default:
      return state;
  }
}
