import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./nav.css";

function Index() {
  const history = useHistory();
  const [show, handleshow] = useState(false);
  const transitiobnavbar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitiobnavbar);
    return () => {
      window.removeEventListener("scroll", transitiobnavbar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__container">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar logo"
        />
      </div>
    </div>
  );
}

export default Index;
