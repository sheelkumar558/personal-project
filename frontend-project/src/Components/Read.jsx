import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
export const Read = () => {
  const [data, setData] = useState([]);
  const handleGet = () => {
    axios
      .get("https://api-rho-gilt.vercel.app/todos")
      .then((res) => setData(res.data))
      .catch((e) => console.log("err", e));
  };
  useEffect(() => {
    handleGet();
  }, []);
  console.log(data);
  return (
    <div
      style={{
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(4,300px)",
        gridGap: "10px",
        textAlign: "center",
      }}
    >
      {data?.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid red",
          }}
        >
          <h3>{todo.user_name}</h3>
          <p>{todo.text}</p>
          <p>{todo.rating}</p>
        </div>
      ))}
    </div>
  );
};
