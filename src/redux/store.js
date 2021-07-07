import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerProduct from "./products";
import reducerCart from "./cart";
import reducerAuth from "./auth";
const producer = combineReducers({
  products: reducerProduct,
  cart: reducerCart,
  auth: reducerAuth,
});

export default createStore(producer, applyMiddleware(thunk));
