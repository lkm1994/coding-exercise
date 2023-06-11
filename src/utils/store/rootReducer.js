import { combineReducers } from "redux";
import applicationReducer from "../AppStore/reducer";
import newsListerReducer from "../../container/NewsLister/reducer";
const rootReducer = combineReducers({
  applicationReducer: applicationReducer,
  newsListerReducer: newsListerReducer,
});

export default rootReducer;
