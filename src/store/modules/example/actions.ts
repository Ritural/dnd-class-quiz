// TYPES
// @NOTE: [EXAMPLE] is the name of your redux module
export const INCREMENT_COUNT = '[EXAMPLE]-INCREMENT';
export const SET_COUNT = '[EXAMPLE]-SET';
export const FETCH_USERS = '[EXAMPLE]-FETCH_USERS';
export const FETCH_USERS_SUCCESS = '[EXAMPLE]-FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = '[EXAMPLE]-FETCH_USERS_FAILURE';

export interface IIncrementCountAction {
  type: typeof INCREMENT_COUNT;
  payload: null;
}

export interface ISetCountAction {
  type: typeof SET_COUNT;
  payload: {
    count: number;
  };
}

// This could be moved to a types file?
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
  website: string;
}

export interface IFetchUsersAction {
  type: typeof FETCH_USERS;
  payload: null;
}

export interface IFetchUsersActionSuccess {
  type: typeof FETCH_USERS_SUCCESS;
  payload: {
    users: IUser[];
  };
}

export interface IFetchUsersActionFailure {
  type: typeof FETCH_USERS_FAILURE;
  payload: {
    error: string;
  };
}

export type ExampleActionTypes =
  | IIncrementCountAction
  | ISetCountAction
  | IFetchUsersAction
  | IFetchUsersActionSuccess
  | IFetchUsersActionFailure;

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
    payload: {
      count,
    },
  };
}

export function actionGetUsers(): IFetchUsersAction {
  return {
    type: FETCH_USERS,
    payload: null,
  };
}
