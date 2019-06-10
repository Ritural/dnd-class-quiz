// TYPES
// @NOTE: [EXAMPLE] is the name of your redux module
export const INCREMENT_COUNT = '[EXAMPLE]-INCREMENT';
export const SET_COUNT = '[EXAMPLE]-SET';

// @TODO Async example
// SET_COUNT_SUCCESS: '[example]-SET-SUCCESS',
// SET_COUNT_ERROR: '[example]-SET-ERROR',

export interface IIncrementCountAction {
  type: typeof INCREMENT_COUNT;
  payload: null;
}

export interface ISetCountAction {
  type: typeof SET_COUNT;
  payload: number;
}

export type ExampleActionTypes = IIncrementCountAction | ISetCountAction;

// ACTIONS
export function actionIncrementCount(): ExampleActionTypes {
  return {
    type: INCREMENT_COUNT,
    payload: null,
  };
}

export function actionSetCount(count: number): ExampleActionTypes {
  return {
    type: SET_COUNT,
    payload: count,
  };
}
