import React from "react";
import "./App.css";
import Row from "../src/components/Row";
import request from "./request";
import Banner from "../src/components/Banner";
import NavBar from "../src/components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginal}
        largePoster
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />

      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
