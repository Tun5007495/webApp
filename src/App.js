import "bootstrap/dist/css/bootstrap.min.css";
import firebase from 'firebase';
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Cart from "./features/cart/index";
import Me from "./features/me/index";
import Home from "./features/products/index";
import store from "./redux/store";
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: 'webapp-b19a3.firebaseapp.com',
  // ...
};

firebase.initializeApp(config);
function App() {
  
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged( async(user) => {
      if(!user){
        return;
      }
      // console.log("loggin username ",user);
      //const token = await user.getIdToken();
      // console.log("loggin token : ",token);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/me">
              <Me />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
