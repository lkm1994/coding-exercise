import { NEWS_LISTER_ACTION_TYPES } from "./actions";
const initialState = {
  searchResult: null,
  searchResultFailure: null,
  searchInput: "",
};
const newsListerReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LISTER_ACTION_TYPES.SEARCH_NEWS_LISTER_SUCCESS:
      return {
        ...state,
        searchResult: action.payload,
      };
    case NEWS_LISTER_ACTION_TYPES.SEARCH_NEWS_LISTER_FAILURE:
      return {
        ...state,
        searchResultFailure: action.payload,
      };
    case NEWS_LISTER_ACTION_TYPES.SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    default:
      return state;
  }
};
export default newsListerReducer;
