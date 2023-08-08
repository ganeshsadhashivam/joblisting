import React from "react";
import RegisterPageImage from "../assets/image 466.png";
import "../components/RegisterPage.css";
const RegisterPage = () => {
  return (
    <div>
      <section id="left">
        <div>
          <h1>Already have an account?</h1>
          <p>Your personal job finder is here</p>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>signin</button>
          <p>
            Don’t have an account? <a href="">Sign Up</a>
          </p>
        </div>
      </section>
      <section id="right">
        <h3>Your Personal Job Finder</h3>
        <img src={RegisterPageImage} alt="" />
      </section>
    </div>
  );
};

export default RegisterPage;
