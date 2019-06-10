import { AppActionTypes, TOGGLE_MENU } from 'store/modules/app/actions';

export interface IAppState {
  isMenuOpen: boolean;
}

export const initialState: IAppState = {
  isMenuOpen: false,
};

export const appReducer = (state = initialState, action: AppActionTypes) => {
  const { payload } = action;

  switch (action.type) {
    case TOGGLE_MENU:
      const { menuOverride } = payload;

      let isMenuOpen = !state.isMenuOpen;

      if (menuOverride !== undefined) {
        isMenuOpen = menuOverride;
      }

      return {
        ...state,
        isMenuOpen,
      };
    default:
      return state;
  }
};
