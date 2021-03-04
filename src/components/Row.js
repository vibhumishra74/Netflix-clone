import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import movietrailer from "movie-trailer";
import axios from "./axios";
import "./row.css";

function Row({ title, fetchUrl, islarge = false }) {
  const [Movie, setMovie] = useState([]);
  const [trailerurl, settrailerurl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log("movies from row", Movie);
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const base_url = "https://image.tmdb.org/t/p/original/";
  const handleclick = (movie) => {
    if (trailerurl) {
      settrailerurl("");
    } else {
      // movieTrailer npm module
      movietrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerurl(urlParams.get("v"));
        })
        .catch((error) => console.log("youtube error", error));
    }
  };
  return (
    <div className="row">
      <h1>{title} </h1>
      <div className="row__posters">
        {Movie.map(
          (movie) =>
            ((islarge && movie.poster_path) ||
              (!islarge && movie.backdrop_path)) && (
              <img
                className={`row__poster ${islarge && "row__postlarge"}`}
                key={movie.id}
                onClick={() => handleclick(movie)}
                src={`${base_url}${
                  islarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerurl && <Youtube videoid={trailerurl} opts={opts} />}
    </div>
  );
}

export default Row;
