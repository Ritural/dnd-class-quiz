import { createAction } from 'state/action-helpers';

export const ExampleActionTypes = {
  INCREMENT_COUNT: '[example]INCREMENT',
  SET_COUNT: '[example]SET',
};

export const actionIncrementCount = () => createAction(ExampleActionTypes.INCREMENT_COUNT);
export const actionSetCount = (count: number) => createAction(ExampleActionTypes.SET_COUNT, count);
