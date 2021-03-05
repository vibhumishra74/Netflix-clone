import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./row.css";
import Apikey from "./apikey";

function Row({ title, fetchUrl, islarge = false }) {
  const [Movie, setMovie] = useState([]);
  const [trailerurl, settrailerurl] = useState("");
  // const [trailerurl, settrailerurl] = useState('https://www.youtube.com/watch?v=KzhcF6wAQ1U&t=3s&ab_channel=moviesclips');
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log("movies from row", Movie);
  // options for react youtube
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const base_url = "https://image.tmdb.org/t/p/original/";
  const handleclick = async (movie) => {
    if (trailerurl) {
      settrailerurl("");
    } else {
      // movieTrailer npm module
      //  await movieTrailer(movie?.name || "")
      //     .then( (url)  => {
      //       // url give all url we only take after v  https://www.youtube.com/watch?v=KzhcF6wAQ1U&t=3s&ab_channel=moviesclips
      //       const  urlParams = new URLSearchParams( new URL(url).search);
      //       settrailerurl( urlParams.get("v"));
      //       console.log(
      //         "trailerurl",
      //         trailerurl,
      //         "settrailerURL",
      //         settrailerurl(urlParams.get("v"))
      //       );
      //     })
      //     .catch((error) =>
      //       console.log(
      //         "youtube error",
      //         error,
      //         console.log(
      //           "trailerurl",
      //           trailerurl,
      //           "settrailerURL",
      //           settrailerurl("hello")
      //         )
      //       )
      //     );

      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=${Apikey}`
      );
      // console.log("trailerurl", trailerurl);
      settrailerurl(trailerurl.data.results[0]?.key);
      if (!trailerurl.data.results[0]?.key) {
        alert("not abailable right now plese try another movies");
      }
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
      {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </div>
  );
}

export default Row;
