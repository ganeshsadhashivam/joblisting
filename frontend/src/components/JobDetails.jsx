import React from "react";
import { useEffect, useState } from "react";
import "./JobDetailModule.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useJobsMutation, useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import Avatar from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
const JobDetails = () => {
  const [alljobs, setAllJobs] = useState([]);
  const [skillset, setSkillSet] = useState("");
  const navigate = useNavigate();

  const [jobs, { isLoading }] = useJobsMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { jobsInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const loadJobs = async () => {
    try {
      console.log("load jobs");
      setAllJobs(await jobs().unwrap());
      dispatch(jobs());
    } catch (err) {
      console.log(err.error);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);
  console.log(alljobs);
  const [logoutApiCall] = useLogoutMutation();

  const loginPage = () => {
    navigate("/login");
  };

  const registerPage = () => {
    navigate("/register");
  };

  const selectedSkills = (e) => {
    console.log(e.target.value);
    setSkillSet(...(skillset + e.target.value));
    // createSelectedSkills(e.target.value);
  };

  console.log(skillset);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err.error);
    }
  };

  const viewJobDetails = () => {
    navigate("/jobdetails");
  };
  return (
    <div className="job-details-page">
      <header>
        <div id="logo-text">
          <a href="/">Jobfinder</a>
        </div>
        {userInfo ? (
          <div className="user-info-section">
            <div>
              <button id="logout" onClick={() => logoutHandler()}>
                Logout
              </button>
            </div>
            <div>
              <p id="user-name">Hello! {userInfo.name}</p>
            </div>
            <div>
              <img id="avatar" src={Avatar} alt="" />
            </div>
          </div>
        ) : (
          <div className="buttons">
            <button onClick={() => loginPage()}>Login</button>
            <button onClick={() => registerPage()}>Register</button>
          </div>
        )}
      </header>
      <section className="job-description-header">
        <div>
          {alljobs.map((job) => {
            const { jobPosition, remoteOrOffice, companyName } = job;
            return (
              <div>
                {jobPosition} work from {remoteOrOffice} at {companyName}
              </div>
            );
          })}
        </div>
      </section>
      <section className="full-job-description">
        <div>
          {alljobs.map((job) => {
            const {
              companyName,
              logoUrl,
              jobPosition,
              monthlySalary,
              jobType,
              remoteOrOffice,
              location,
              jobDescription,
              aboutCompany,
              skillsRequired,
              information,
              updatedAt,
            } = job;
            return (
              <div>
                <div className="date-jobtype">
                  <div>
                    <p>{updatedAt}</p>
                  </div>
                  <div>
                    <p>{jobType}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p id="job-position">{jobPosition} </p>
                  </div>
                  <div>{location}</div>
                </div>
                <div className="date-jobtype">
                  <div>
                    <p>
                      <FaMoneyCheckAlt /> stipend
                    </p>
                    <p>{monthlySalary}</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <GiSuitcase /> duration
                    </p>
                    <p>{jobType}</p>
                  </div>
                </div>
                <div>
                  <h3>About Company</h3>
                  <p>{aboutCompany}</p>
                </div>
                <div>
                  <h3>About The Job/Internship</h3>
                  <p>{jobDescription}</p>
                </div>
                <div>
                  <h3>Skills Required</h3>
                  <div id="skills-required">
                    <p>{skillsRequired.substr(0, 3)}</p>
                    <p>{skillsRequired.substr(4, 4)}</p>
                    <p>{skillsRequired.substr(9, 18)}</p>
                  </div>
                </div>
                <div>
                  <h3>Additional Information</h3>
                  <p>{information}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
