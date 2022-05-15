import React, { useState } from "react";
import './Form.css'

const Form = () => {
  const [salary, setSalary] = useState("10000");
  const minSalary = "10000";
  const maxSalary = "100000";

  const handleSalary = (e) => {
    setSalary(e.target.value);
  };
  return (
    <div className="form">
      <div className="form-container">
        <form>
          <label>
            Full name <br />
            <input type="text" placeholder="John Smith" required />
          </label>
          <label>
            Email <br />
            <input type="email" placeholder="johnsmith@gmail.com" required />
          </label>
          <label>
            Date of birth <br />
            <input type="date" required />
          </label>
          <label>
            Choose your favourite colour <br />
            <input type="color" required />
          </label>
          <label htmlFor="salary">
            Annual Salary <br />
            <input
              id="salary"
              type="range"
              min={minSalary}
              max={maxSalary}
              //   value={(e) => e.target.value}
              step="1000"
              onChange={handleSalary}
              required
            />
            <output>£{salary}</output>
          </label>
          <button className="submit-button" type="submit">
            See my options!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;