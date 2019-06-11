import {
  ExampleActionTypes,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  INCREMENT_COUNT,
  IUser,
  SET_COUNT,
} from 'store/modules/example/actions';

export interface IExampleState {
  count: number;
  isLoading: boolean;
  users: IUser[];
  error?: string;
}

export const INITIAL_STATE: IExampleState = {
  count: 0,
  isLoading: false,
  users: [],
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
    case FETCH_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USERS_SUCCESS:
      const { users } = action.payload;

      return {
        ...state,
        isLoading: false,
        users,
      };
    case FETCH_USERS_FAILURE:
      const { error } = action.payload;

      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
}
