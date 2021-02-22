import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";

function Row({ title, fetchUrl, islarge = false }) {
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log("movies from row", Movie);

  const base_url = "https://image.tmdb.org/t/p/original/";

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
                src={`${base_url}${
                  islarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
