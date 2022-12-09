import React from "react";
import "./Exercise.css"

const Exercise = () => {
    return(
        <div className="wrapper rounded bg-white">

        <div className="h3">My Exercise Today</div>

        <div className="form">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Day</label>
                    <input type="date" class="form-control" required />
                </div>
            </div>
            <div className=" my-md-2 my-3">
                <label>Type</label>
                <select id="sub" required>
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
                    <input type="sets" class="form-control" required />
                </div>
            </div>    
            <div class="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Weight</label>
                    <input type="weight" class="form-control" required />
                </div>
            </div>    
            <div className="btn btn-primary mt-3">Complete</div>
            <div className="btn btn-primary mt-3">Add Exercise</div>
        </div>

    </div>
    );
};

export default Exercise;