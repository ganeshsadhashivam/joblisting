import React, { useEffect } from "react";
import { useState } from "react";
import RegisterPageImage from "../assets/image 466.png";
import "../components/Loginmodule.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "./Loader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async (e) => {
    e.preventDefault(e);
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      console.log("submit");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const signUp = () => {
    navigate("/register");
  };

  return (
    <div className="Register-page">
      <section id="Register-page-left">
        <div>
          <h1>Already have an account?</h1>
          <p>Your personal job finder is here</p>
          <form onSubmit={submitLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isLoading && <Loader />}
            {/* onClick={(e) => submitLogin(e)} */}
            <button>signin</button>
            <p>
              Don’t have an account?{" "}
              <a href="" onClick={(e) => signUp(e)}>
                Sign Up
              </a>
            </p>
          </form>
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
