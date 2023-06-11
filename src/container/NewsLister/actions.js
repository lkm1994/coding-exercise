import { _request } from "../../utils/helper";
const NewsListerActions = "@NewsListerActionTypes";
export const NEWS_LISTER_ACTION_TYPES = {
  SEARCH_NEWS_LISTER: `${NewsListerActions}/SEARCH_NEWS_LISTER`,
  SEARCH_NEWS_LISTER_SUCCESS: `${NewsListerActions}/SEARCH_NEWS_LISTER_SUCCESS`,
  SEARCH_NEWS_LISTER_FAILURE: `${NewsListerActions}/SEARCH_NEWS_LISTER_FAILURE`,
  SET_SEARCH_INPUT: `${NewsListerActions}/SET_SEARCH_INPUT`,
};

export const action = (type, payload) => ({ type, payload });
const Actions = {
  searchNewsLister: (payload = {}) => {
    return (dispatch) => {
      dispatch(action(NEWS_LISTER_ACTION_TYPES.SEARCH_NEWS_LISTER, payload));
      return _request(payload)
        .then((response) => {
          const result =
            response.data && response.data.response
              ? response.data.response
              : [];
          dispatch(
            action(NEWS_LISTER_ACTION_TYPES.SEARCH_NEWS_LISTER_SUCCESS, result)
          );
          return result;
        })
        .catch((err) =>
          dispatch(
            action(NEWS_LISTER_ACTION_TYPES.SEARCH_NEWS_LISTER_FAILURE, err)
          )
        );
    };
  },
};

export default Actions;
