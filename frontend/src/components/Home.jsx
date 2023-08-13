import React from "react";
import { useEffect, useState } from "react";
import "./HomeModule.css";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
const Home = () => {
  const [skillset, setSkillSet] = useState("");
  const navigate = useNavigate();
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

        <div className="buttons">
          <button onClick={() => loginPage()}>Login</button>
          <button onClick={() => registerPage()}>Register</button>
        </div>
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
              {/* {skillset.map((value) => {
              return <div className="createSelectedSkillsId"> {value}</div>;
            })} */}
            </div>
            <div>
              <button id="clear">clear</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
