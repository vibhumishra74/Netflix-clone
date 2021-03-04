import React from "react";
import "./planscreen.css";

function Planescreen() {
  return (
    <div className="planscreen__plan">
      <div className="planscreen__infos">
        <h5>Premium</h5>
        <h6>4k + HDR</h6>
        <button onClick={() => alert("you subscribe for Premium plan")}>
          Subscribe
        </button>
      </div>
      <div className="planscreen__infos">
        <h5>Standard</h5>
        <h6>1080p</h6>
        <button onClick={() => alert("you subscribe for Standard plan")}>
          Subscribe
        </button>
      </div>
      <div className="planscreen__infos">
        <h5>Basic</h5>
        <h6>720p</h6>
        <button onClick={() => alert("you subscribe for Basic plan")}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Planescreen;
