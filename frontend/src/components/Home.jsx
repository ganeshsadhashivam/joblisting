import React, { useDebugValue } from "react";
import { useEffect, useState } from "react";
import "./HomeModule.css";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import { useJobsMutation, useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Home = () => {
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

  const addJobPage = () => {
    navigate("/addjob");
  };

  //   const createSelectedSkills = (props) => {
  //     console.log("hi");
  //     //   <div id="createSelectedSkillsId">{props}</div>;
  //     setSkillSet(props);
  //   };

  //   useEffect(() => {

  //   }, [skillset]);

  return (
    <div className="home-page">
      <header>
        <div id="logo-text">
          <a href="/home">Jobfinder</a>
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
      <section className="search-section">
        <div>
          <div className="search-bar">
            <FiSearch />
            <input type="text" placeholder="Type any job title" />
          </div>
          <div className="drop-down-flex">
            <div className="drop-down">
              <select
                onChange={(e) => selectedSkills(e)}
                name="skills"
                id="skills"
              >
                <option value="skills">Skills</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="NodeJS">NodeJS</option>
                <option value="ExpressJS">ExpressJS</option>
                <option value="C">C</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="TypeScript">TypeScript</option>
                <option value="RubyRails">RubyRails</option>
              </select>
            </div>
            <div>
              <div>
                {userInfo ? (
                  <div>
                    <button className="add-job" onClick={() => addJobPage()}>
                      +AddJob
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {/* {skillset.map((value) => {
              return <div className="createSelectedSkillsId"> {value}</div>;
            })} */}
              </div>
              <div>
                <button id="clear">clear</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jobs-section">
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
          } = job;
          return (
            <>
              <div className="job-logo-position-skills">
                <div>
                  <img src={logoUrl} alt="googlelogo" id="companylogo" />
                </div>
                <div>
                  <p>{jobPosition}</p>
                </div>
                <div className="skills">
                  <button>{skillsRequired.substring(0, 3)}</button>
                  <button>{skillsRequired.substring(4, 8)}</button>
                  <button>{skillsRequired.substring(9, 18)}</button>
                </div>
              </div>
              <div className="job-salary-location">
                <div>
                  <div>₹ {monthlySalary}</div>
                </div>
                <div>
                  <div>{location}</div>
                </div>
              </div>
              <div className="job-type-view-details">
                <div id="remoteoroffice">
                  <div>
                    <div id="remote-office">{remoteOrOffice}</div>
                  </div>
                  <div>
                    <div id="contract">{jobType}</div>
                  </div>
                </div>
                <div>
                  <button
                    className="viewDetails"
                    onClick={() => viewJobDetails()}
                  >
                    view details
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
