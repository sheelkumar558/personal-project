import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./home.css";
export const BookMovie = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [user, setUser] = useState("");
  const [shift, setShift] = useState("");
  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  const handleTicket = () => {
    navigate(0);
    const data = {
      name: name,
      price: price,
      userName: user,
      shift: shift,
    };
    userData.push(data);
    localStorage.setItem("userData", JSON.stringify(userData));
    //window.location.reload(false);
  };

  return (
    <>
      <div className="ticket">
        <p>Movie Name:- {name}</p>
        <input
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="user name"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <select onChange={(e) => setShift(e.target.value)}>
          <option value="">Select</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
        </select>

        <button onClick={handleTicket}>Book Ticket</button>
        <br />
        <br />
      </div>
      <div>
        <table
          style={{
            margin: "auto",
          }}
        >
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>User Name</th>
              <th>Price</th>
              <th>Shift</th>
            </tr>
          </thead>
          {userData?.map((e, i) => (
            <tbody key={i}>
              <tr>
                <td>{e.name}</td>
                <td>{e.userName}</td>
                <td>{e.price}</td>
                <td>{e.shift}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};
