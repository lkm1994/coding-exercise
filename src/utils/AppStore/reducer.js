import { DEFAULT_LOADER_VALUE } from "../constants";
import { APP_ACTIONS } from "./actions";
const initialState = {
  isLoading: DEFAULT_LOADER_VALUE,
};
const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTIONS.SHOW_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
export default applicationReducer;
