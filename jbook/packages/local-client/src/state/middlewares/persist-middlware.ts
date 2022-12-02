import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionType } from "../action-types";
import { saveCells } from "../action-creators";

export const persistMiddlware = ({ dispatch }: { dispatch: Dispatch<Action> }) => {
  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);
    };
  };
};