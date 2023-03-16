import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Token = localStorage.getItem("MyToken");
  const payload = {
    email: email,
    password: password,
  };

  const onSubmitHandler = () => {
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => localStorage.setItem("MyToken", res.data.token))
      .catch((e) => console.log(e));
  };

  console.log(Token);
  useEffect(() => {
    if (Token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [Token]);
  return (
    <div>
      <h2>Login page</h2>
      <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        variant="filled"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        variant="filled"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button variant="contained" disableElevation onClick={onSubmitHandler}>
        Login
      </Button>
    </div>
  );
};
export default Login;
