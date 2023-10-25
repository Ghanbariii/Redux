import { combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";

const rootStore = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootStore);

export default store;
