import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
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
      <a className="link" href="#">Forgot your password?</a>
     <button className="log-btn"variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}</button>
      <p>
            Don't have an account?
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
      </p>     
   </div>

    </form>
  );
}

export default Login;
