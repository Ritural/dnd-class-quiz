export const TOGGLE_MENU = '[APP]-TOGGLE_MENU';

export interface IToggleMenu {
  type: typeof TOGGLE_MENU;
  payload: {
    menuOverride?: boolean;
  };
}

export type AppActionTypes = IToggleMenu;

export function actionToggleMenu(menuOverride?: boolean): AppActionTypes {
  return {
    type: TOGGLE_MENU,
    payload: {
      menuOverride,
    },
  };
}
