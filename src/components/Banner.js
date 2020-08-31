import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../request";
import "../Banner.css";
const url = "https://image.tmdb.org/t/p/original";

function Banner(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetched_Data = await axios.get(request.fetchNetflixOriginal);
      setMovie(
        fetched_Data.data.results[
          Math.floor(Math.random() * fetched_Data.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateString(string, maxLength = 50) {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}.....`;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_desc">{truncateString(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fade"></div>
    </div>
  );
}

export default Banner;
