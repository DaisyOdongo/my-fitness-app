import { useState } from "react";
import Login from "../forms/Login";
import SignUp from "../forms/Signup";

function UserLogin({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1>My Fitness Tracker App</h1>
      {showLogin ? (
        <>
          <Login onLogin={onLogin} />
          <div />
          
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
    </div>
  );
}
 export default UserLogin;
