import { createAction } from "store/action-helpers";

export const ExampleActionTypes = {
  INCREMENT_COUNT: `[example]-INCREMENT`,
  SET_COUNT: `[example]-SET`

  // @TODO Async example
  // SET_COUNT_SUCCESS: '[example]-SET-SUCCESS',
  // SET_COUNT_ERROR: '[example]-SET-ERROR',
};

export const actionIncrementCount = () => createAction(ExampleActionTypes.INCREMENT_COUNT);
// export type ActionSetCountType {
//   count: number;
// }
export const actionSetCount = (count: number) => createAction(ExampleActionTypes.SET_COUNT, count);
