
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/forms/Navbar";
import Exercise from "./components/Exercise";
import UserLogin from "./components/UserLogin/UserLogin";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <UserLogin onLogin={setUser} />;
  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<Exercise user={user} /> }/>
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
