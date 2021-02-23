// import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";

function App() {
  let user = null;
  // let user = "vibhu";
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
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
