import React from "react";
import RegisterPageImage from "../assets/image 466.png";
import "../components/Loginmodule.css";
const Login = () => {
  return (
    <div className="Register-page">
      <section id="Register-page-left">
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
      <section id="Register-page-right">
        <h3>Your Personal Job Finder</h3>
        <img src={RegisterPageImage} alt="" />
      </section>
    </div>
  );
};

export default Login;

// src/components/Login.js
// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { loginUser } from '../actions/authActions';
// import { Redirect } from 'react-router-dom';

// const Login = ({ loginUser, isAuthenticated }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     loginUser(email, password);
//   };

//   if (isAuthenticated) {
//     return <Redirect to="/home" />;
//   }

//   return (
//     <div>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { loginUser })(Login);
