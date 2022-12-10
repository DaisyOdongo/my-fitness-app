import React from "react";
import Navbar from "../forms/Navbar"
import "./Home.css";
import { useState, useEffect } from "react";
import UserLogin from "../UserLogin/UserLogin"
 

const url = "http://localhost:3000";
//const CartContext = React.createContext();
function Home() {   
const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <UserLogin onLogin={setUser} />;

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div className="container-fluid banner">
        <div className="card p-5 banner-title">
          <h5>Track your workouts on the go</h5>
        </div>
      </div>
      <div className="container-fluid about">
        <div className="container">
          <div className="row padding">
            <div className="col-lg-6">
              <img
                src="https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_960_720.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <h5 className="text-center mb-4">About Us</h5>
              <p className="lead text-center">
                My fitness App helps users track all their workouts <br /> on a day to day basis and the duration that they have worked out <br /> so as to see their progress over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default (Home , url);
