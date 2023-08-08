import React from "react";
import RegisterPageImage from "../assets/image 466.png";
import "../components/Registration.css";
const Registration = () => {
  return (
    <div className="Registration">
      <section id="Registration-left">
        <div>
          <h1>Create an account</h1>
          <p>Your personal job finder</p>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile" />
          <input type="text" placeholder="Password" />
          <label
            htmlFor="
          "
          >
            <p>
              By creating an account, I agree to our terms of use and privacy
              policy
            </p>
          </label>
          <input type="checkbox" name="" id="" />
          <button>Create Account</button>
          <p>
            Already have an account? <a href="">Sign In</a>
          </p>
        </div>
      </section>
      <section id="Registration-right">
        <h3>Your Personal Job Finder</h3>
        <img src={RegisterPageImage} alt="" />
      </section>
    </div>
  );
};

export default Registration;
