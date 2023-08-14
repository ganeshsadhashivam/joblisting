import React from "react";
import { useState, useEffect } from "react";
import RegisterPageImage from "../assets/image 466.png";
import "../components/Registrationmodule.css";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = async (e) => {
    e.preventDefault(e);
    // if (password !== confirmPassword) {
    //   toast.error("Passwords do not match");
    // } else {
    try {
      const res = await register({ name, email, mobile, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    //}
  };

  const signIn = () => {
    navigate("/login");
  };
  return (
    <div className="Registration">
      <section id="Registration-left">
        <div>
          <h1>Create an account</h1>
          <p>Your personal job finder</p>
          <form action="" onSubmit={(e) => submitRegister(e)}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile"
              name="mobileNo"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>
              <label
                htmlFor="
          "
              >
                <input type="checkbox" name="" id="checkbox" />
                <p>
                  By creating an account, I agree to our terms of use and
                  privacy policy
                </p>
              </label>
            </span>
            {isLoading && <Loader />}
            <button>Create Account</button>
          </form>
          <p>
            Already have an account?{" "}
            <a href="" onClick={(e) => signIn(e)}>
              Sign In
            </a>
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
