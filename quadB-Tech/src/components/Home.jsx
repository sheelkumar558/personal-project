import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  const [movieData, setMovieData] = useState();
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setMovieData(res.data));
  }, []);
  console.log(movieData);
  return (
    <div>
      <h1>Movie App</h1>
      <div className="main">
        {movieData?.map((movie, i) => (
          <Link to={`/summary/${movie.show.id}`} key={i} className="cont">
            <img
              style={{
                width: "300px",
              }}
              src={movie?.show.image?.medium}
              alt=""
            />
            <p>{movie?.show.name}</p>
            <p>{movie?.show.language}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
