import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="login-form">
     <div className="form-group ">
      <label>Username</label>
       <input type="text" 
       className="form-control" 
       placeholder="Username " 
       id="UserName"
       autoComplete="off"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       />
     </div>
     <div className="form-group log-status">
      <label>Password</label>
       <input type="password" 
       className="form-control" 
       placeholder="Password" 
       id="Passwod"
       autoComplete="current-password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
     </div>
      <>
        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
      </>
      <>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </>  
   </div>
    </form>
  );
}

export default Login;
