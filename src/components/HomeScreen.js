import React from "react";
import Banner from "./Banner";
import Nav from "./nav";
import request from "./requests";
import Row from "./Row";

function HomeScreen() {
  return (
    <div>
      {/* nav */}
      <Nav />
      {/* banner */}
      <Banner />
      {/* row */}
      <Row
        title="Trending Now"
        fetchUrl={request.fetchTrending}
        islarge={true}
      />
      <Row title="Top rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horrow Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default HomeScreen;
