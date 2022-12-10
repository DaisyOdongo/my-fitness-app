import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserLogin from "./components/UserLogin/UserLogin";
import Navbar from "./components/forms/Navbar";
import Exercise from "./components/Exercise";
import WorkoutList from "./components/WorkoutList";

function App() {
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
    <>
      <Navbar user={user} setUser={setUser} />
      <main>
        <Routes>
           <Route path="/" element={<Home />} />     
          <Route path="/new" element={<Exercise user={user} />} />
          <Route path="/components/workoutlist" element={<WorkoutList />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
