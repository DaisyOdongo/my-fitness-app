//import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
//import UserLogin from "./components/UserLogin/UserLogin";
import Navbar from "./components/forms/Navbar";
import Exercise from "./components/Exercise";
import WorkoutList from "./components/WorkoutList";

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
           <Route path="/" element={<Home />} />     
          <Route path="/new" element={<Exercise />} />
          <Route path="/components/workoutlist" element={<WorkoutList />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
