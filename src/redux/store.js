// import { combineReducers, createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
//  import reducerProduct from "./products";
//  import reducerCart from "./cart";
//  import reducerAuth from "./auth";
 

// const producer = combineReducers({
//   products: reducerProduct,
//   cart: reducerCart,
//   auth: reducerAuth,
// });

// export default createStore(producer, applyMiddleware(thunk));

import { configureStore } from '@reduxjs/toolkit'
 import reducerProduct from "./products";
 import reducerCart from "./cart";
 import reducerAuth from "./auth";
const store = configureStore(
  {
    reducer:{auth: reducerAuth,products: reducerProduct,cart: reducerCart }
  });

export default store;