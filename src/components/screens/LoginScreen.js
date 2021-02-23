import React from "react";
import "./loginscreen.css";

function LoginScreen() {
  return (
    <div className="loginscreen">
      {/* <img src="background.jpg" alt="background" /> */}

      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />
        <button className="loginscreen__button">Signin</button>
        <div className="loginscreen__gradient" />
      </div>
      <div className="loginscreen__body">
        <>
          <h1>Unlimited films, TV programmes, web series and many more</h1>
          <h2>Watch any where. Cancel at any Time.</h2>
          <h3>
            Ready to Watch? Enter your email to create or restart your
            membership
          </h3>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;