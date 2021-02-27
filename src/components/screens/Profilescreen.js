import React from "react";
import { useSelector } from "react-redux";
import Nav from "../nav";
import { auth } from "../firebase";
import { selectuser } from "../../features/userslice";
import "./profilescreen.css";
import Planescreen from "./Planescreen";
function Profilescreen() {
  const user = useSelector(selectuser);
  return (
    <div className="profilescreen">
      <Nav />
      <div className="profilescreen__body">
        <h1>Edit Profile</h1>
        <div className="profilescreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile screen"
          />
          <div className="profilescreen__details">
            <h2>{user.email} </h2>
            <div className="profilescreen__plans">
              <h3>Plans</h3>
              <Planescreen />
              <button
                onClick={() => auth.signOut()}
                className="profilescreen__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilescreen;
