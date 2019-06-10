// TYPES
// @NOTE: [EXAMPLE] is the name of your redux module
const INCREMENT_COUNT = '[EXAMPLE]-INCREMENT';
const SET_COUNT = '[EXAMPLE]-SET';
// @TODO Async example
// SET_COUNT_SUCCESS: '[example]-SET-SUCCESS',
// SET_COUNT_ERROR: '[example]-SET-ERROR',

interface IIncrementCountAction {
  type: typeof INCREMENT_COUNT;
  payload: null;
}

interface ISetCountAction {
  type: typeof SET_COUNT;
  payload: number;
}

type ExampleActionTypes = IIncrementCountAction | ISetCountAction;

// ACTIONS
function actionIncrementCount(): ExampleActionTypes {
  return {
    type: INCREMENT_COUNT,
    payload: null,
  };
}

function actionSetCount(count: number): ExampleActionTypes {
  return {
    type: SET_COUNT,
    payload: count,
  };
}

export {
  INCREMENT_COUNT,
  SET_COUNT,
  IIncrementCountAction,
  ISetCountAction,
  actionIncrementCount,
  actionSetCount,
  ExampleActionTypes,
};
