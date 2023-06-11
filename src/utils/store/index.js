import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from 'redux-thunk';

const middleware = [thunk];
// Mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware).concat(logger),
});

export default store;
