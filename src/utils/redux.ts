import { AnyAction } from "redux";

export function createReducer<T>(initState: T, typeToHandlerMap: { [key: string]: Function }) {
  return (state = initState, action: AnyAction) => {
    const { type, payload } = action;
    const handler = typeToHandlerMap[type];

    if (handler) {
      return handler(state, payload);
    }

    return state;
  };
}
