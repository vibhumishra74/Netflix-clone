// import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { auth } from "./components/firebase";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import Profilescreen from "./components/screens/Profilescreen";
import { login, logout, selectuser } from "./features/userslice";

function App() {
  let user = useSelector(selectuser);
  let dispatch = useDispatch();
  // let user = "vibhu";
  useEffect(() => {
    const current_user = auth.onAuthStateChanged((userauth) => {
      if (userauth) {
        //login check
        console.log("userauth", userauth);
        dispatch(
          login({
            uid: userauth.uid,
            email: userauth.email,
          })
        );
      } else {
        //logout check
        dispatch(logout);
      }
    });
    return current_user;
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            {/* <Route exact path="/test">
              <img src="background.jpg" alt="logo" />
            </Route> */}
            <Route exact path="/profile" component={Profilescreen} />
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
