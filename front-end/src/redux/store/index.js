import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/loginReducer";
import dataReducer from "../reducer/dataReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  data: dataReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
