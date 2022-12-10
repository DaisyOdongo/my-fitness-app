import React, { useState } from "react";
import Exercise from "../Exercise";
import Login from "./Login";
import "./Signup.css"
//import url from "../Home/Home"

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        passwordConfirmation
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((user) => onLogin(user));
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    }).catch(e=>{
        console.log("Error Sending Data" + e)
    });
    console.log(Login)
  }

  return (
    <form onSubmit={handleSubmit}>
      <>
      <label>Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </>  
      <>
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </>
      <>
        <label>Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </>
      <>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </>
      <>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </>
    </form>
  
  );
}

export default Signup;
