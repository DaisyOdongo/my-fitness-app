import { useState } from "react";
import Login from "../forms/Login";
import SignUp from "../forms/Signup";

function UserLogin({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <h1>My Fitness Tracker App</h1>
      {showLogin ? (
        <>
          <Login onLogin={onLogin} />
          <div />
          <p>
            Don't have an account?
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
      </p>  
      </>
      ) : (
        <>
          <SignUp onLogin={onLogin} />
          <div />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </>
  );
}
 export default UserLogin;
