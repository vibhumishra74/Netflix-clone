import React from "react";
import "./banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        // backgroundImage: new URL("https://i.imgur.com/e1hLQ2m.png"),
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        <h1 className="banner__description">
          {truncate(
            `this is banner desrtiption test this is banner desrtiption tetst this is banner desrtiption tetst this is banner desrtiption tetst this is banner desrtiption tetst `,
            150
          )}
        </h1>
      </div>
      <div className="banner__fadeButton" />
    </header>
  );
}

export default Banner;
