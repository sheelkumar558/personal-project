import axios from "axios";
import React, { useState } from "react";

export const Create = () => {
  const [user, setUser] = useState("");
  const [task, settask] = useState("");
  const [rating, setrating] = useState("");
  const handleCreate = () => {
    const payload = {
      user_name: user,
      text: task,
      rating: rating,
    };
    axios
      .post("https://api-rho-gilt.vercel.app/todos", payload)
      .then((res) => console.log(res.data))
      .catch((e) => console.log("err", e));
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter user name"
          onChange={(e) => setUser(e.target.value)}
        />{" "}
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="task..."
          onChange={(e) => settask(e.target.value)}
        ></textarea>
        <br />
        <input
          type="number"
          placeholder="Enter rating"
          onChange={(e) => setrating(e.target.value)}
        />{" "}
        <br />
        <button onClick={handleCreate}>Add</button>
      </div>
    </div>
  );
};
