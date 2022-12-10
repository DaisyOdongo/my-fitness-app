import React, { useState, useNavigate } from "react";
import "./Exercise.css"



function Exercise({user}) {
  const [name, setName] = useState("My Awesome Recipe");
  const [day, setDay] = useState([]);
  const [type, setType] = useState([]);
  const [sets, setSets] = useState([]);
  const [weight, setWeight] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //const url = "http://localhost:3000";

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        day,
        type,
        weight,
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        navigate.push("/");
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return(
        <div className="wrapper rounded bg-white">

        <div className="h3">My Exercise Today</div>
        <form onSubmit={handleSubmit}>
        <div className="form">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Day</label>
                    <input 
                    type="date" 
                    className="form-control" 
                    id="date"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    required />
                </div>
            </div>
            <div className=" my-md-2 my-3">
                <label>Type</label>
                <select id="sub" 
                value={type}
                onChange={(e) => setType(e.target.value)}
                required>
                    <option value="" selected hidden>Choose Option</option>
                    <option value="Strength">Strength</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Flexibily">Flexibily</option>
                    <option value="Cordination">Cordination</option>
                    <option value="Balance">Balance</option>
                </select>
            </div>
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Sets</label>
                    <input 
                    type="sets" 
                    className="form-control"
                    id="sets"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)} required />
                </div>
            </div>    
            <div class="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Weight</label>
                    <input 
                    type="weight" 
                    className="form-control"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)} required />
                </div>
            </div>    
        <div>
            <button color="primary" type="submit">
              {isLoading ? "Loading..." : "Complete"}
            </button>
            <button color="primary" type="submit">
              {isLoading ? "Loading..." : "Add Exercise"}
            </button>
          </div>
          <div>
            {errors.map((err) => (
              <error key={err}>{err}</error>
            ))}
          </div>
          </div>
        </form>
    </div>
    );
};

export default Exercise;