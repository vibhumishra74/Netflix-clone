import React from "react";
import "./signupscreen.css";

function Signupscreen() {
  return (
    <div className="signupscreen">
      <form>
        <h1> Sign In</h1>
        <input placeholder="email address" type="email" />
        <input placeholder="password" type="password" />
        <button type="submit"> sign In </button>
        <h4>
          {" "}
          <span className="signupscreen__gray"> New to Netflix? </span>
          <span className="signupscreen__link"> Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default Signupscreen;
