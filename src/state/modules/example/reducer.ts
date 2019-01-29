import { ExampleActionTypes } from 'state/modules/example/actions';

interface IAction {
  type: keyof typeof ExampleActionTypes;
  payload: any; // @TODO Figure out a good way to type the payload
}

export interface IExampleState {
  count: number;
}

export const EXAMPLE_INITIAL_STATE: IExampleState = {
  count: 0,
};

export function exampleReducer(state = EXAMPLE_INITIAL_STATE, action: IAction): IExampleState {

  switch (action.type) {
    case ExampleActionTypes.INCREMENT_COUNT:
      const count = state.count + 1;

      return {
        ...state,
        count,
      }
    case ExampleActionTypes.SET_COUNT:
      const newCount = action.payload;

      return {
        ...state,
        count: newCount,
      }
    default:
      return state;
  }
}
