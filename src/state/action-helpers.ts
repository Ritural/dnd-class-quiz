export interface IAction<T extends string> {
  type: T;
}

export interface IActionWithPayload<T extends string, P> extends IAction<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): IAction<T>;
export function createAction<T extends string, P>(type: T, payload: P): IActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return (payload === undefined) ? { type } : { type, payload };
}

// export const action = (name: string) => (actionName: string) => {
//   return `${name}-${actionName}`;
// };

// export type ActionType = {
//   [key: string]: [ string, boolean? ];
// }

// type Action = {
//   [key: string]: string;
// }

// export function createActions(name: string, actionTypes: ActionType) {
//   const keys = Object.keys(actionTypes);
//   const actions: Action = {};

//   keys.forEach((key) => {
//     const action = actionTypes[key];
//     const actionName = action[0];
//     // const isAsync = action[1];

//     // if (isAsync) {
//     //   actions[`${actionName}_SUCCESS`],
//     // }

//     actions[actionName] = `[${name}]-${actionName}`;
//   });

//   return actions;
// }

// type FunctionType = ( ...args: any[] ) => any;
// interface IActionCreatorsMapObject {
//   [actionCreator: string]: FunctionType;
// }

// export type ActionsUnion<A extends IActionCreatorsMapObject> = ReturnType<A[keyof A]>;
