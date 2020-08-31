import React, { useState, useEffect } from "react";
import "../Row.css";
import axios from "../axios";

const url = "https://image.tmdb.org/t/p/original";

function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <div className="row_title">{props.title}</div>
      <div className="row_images">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_image ${props.largePoster && "row_largeImage"}`}
            src={`${url}${
              props.largePoster ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
