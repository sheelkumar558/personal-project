import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./home.css";
// import { BookMovie } from "./BookMovie";
export const Summary = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => setSingleData(res.data));
  }, []);
  console.log(singleData);
  return (
    <div className="single">
      <div>
        <img
          style={{
            width: "300px",
          }}
          src={singleData.image?.original}
          alt=""
        />
      </div>
      <div>
        <p>{singleData.name}</p>
        <p>{singleData.language}</p>
        <p>{singleData.summary}</p>
        <button>
          <Link to={`/bookMovie/${singleData.name}`}>Buy ticket</Link>
        </button>
      </div>
    </div>
  );
};
