import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "./axios";
import Requests from "./requests";

function Banner() {
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(Requests.fetchNetflixOrignals);
      // console.log("request", request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return;
    }
    fetchdata();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        // backgroundImage: new URL("https://i.imgur.com/e1hLQ2m.png"),
        // setting defauly image from imdb
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {Movie?.title || Movie?.name || Movie?.original_title}
        </h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        <h1 className="banner__description">
          {truncate(Movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeButton" />
    </header>
  );
}

export default Banner;
