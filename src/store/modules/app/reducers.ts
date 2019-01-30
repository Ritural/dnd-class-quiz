import { AppActionTypes } from "store/modules/app/actions";

interface IAction {
  type: keyof typeof AppActionTypes;
  payload: any; // @TODO Figure out a good way to type the payload
}

interface IAppState {
  currentLocation: string;
  isMenuOpen: boolean;
}

export const initialState: IAppState = {
  currentLocation: "",
  isMenuOpen: false,
};

const reducerApp = (state = initialState, action: IAction) => {
  switch (action.type) {
    case AppActionTypes.LOCATION_CHANGE:
      return {
        ...state,
        currentLocation: action.payload.location
      };
    case AppActionTypes.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
};

export default reducerApp;
