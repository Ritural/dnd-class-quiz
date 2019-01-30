import { createAction } from "store/action-helpers";

export const AppActionTypes = {
  TOGGLE_MENU: `[app]-TOGGLE_MENU`,
  LOCATION_CHANGE: `[app]-LOCATION_CHANGE`,
};

export const actionIncrementCount = () => createAction(AppActionTypes.TOGGLE_MENU);
export const actionSetCount = () => createAction(AppActionTypes.LOCATION_CHANGE);
