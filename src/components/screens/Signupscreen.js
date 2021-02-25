import React, { useRef } from "react";
import { auth } from "../firebase";
import "./signupscreen.css";

function Signupscreen() {
  // creating the refrance
  const emailref = useRef();
  const passwordref = useRef();
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        //getting user input value
        emailref.current.value,
        passwordref.current.value
      )
      .then((user) => {
        console.log("userdata", user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupscreen">
      <form>
        <h1> Sign In</h1>
        <input ref={emailref} placeholder="email address" type="email" />
        <input ref={passwordref} placeholder="password" type="password" />
        <button type="submit" onClick={signin}>
          {" "}
          sign In{" "}
        </button>
        <h4>
          {" "}
          <span className="signupscreen__gray"> New to Netflix? </span>
          <span className="signupscreen__link" onClick={register}>
            {" "}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Signupscreen;
