import React from "react";
import AddJobPageBackround from "../assets/WallpaperDog-20567151 1.png";

import "./AddJobDescriptionmodule.css";
const AddJobDescription = () => {
  return (
    <section>
      <div className="add-job-page">
        <div id="add-job-left">
          <form action="">
            <h1>Add job description</h1>
            <label htmlFor="">
              Company Name
              <input type="text" placeholder="Enter your company name here" />
            </label>
            <label htmlFor="">
              Add logo URL
              <input type="text" placeholder="Enter the link" />
            </label>
            <label htmlFor="">
              Job position
              <input type="text" placeholder="Enter Job position" />
            </label>
            <label htmlFor="">
              Monthly salary
              <input type="text" placeholder="Enter Amount in rupees" />
            </label>
            <label htmlFor="">
              Job Type
              <select name="jobtype" id="jobType">
                <option value="Fixed">Fixed</option>
                <option value="Contract">Contract</option>
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
              </select>
            </label>
            <label htmlFor="">
              Remote/office
              <select name="joblocation" id="joblocation">
                <option value="Office">Office</option>
                <option value="WorkFromHome">SaabWorkFromHome</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </label>
            <label htmlFor="">
              Location
              <input type="text" placeholder="Enter Location" />
            </label>
            <label htmlFor="">
              Job Description
              <input type="text" placeholder="Type the Job Description" />
            </label>
            <label htmlFor="">
              About Company
              <input type="text" placeholder="Type About Your Company" />
            </label>
            <label htmlFor="">
              Skills Required
              <input type="text" placeholder="Enter the must have skills" />
            </label>
            <label htmlFor="">
              Information
              <input
                type="text"
                placeholder="Enter the additional information"
              />
            </label>
            <label htmlFor="">
              Company Name
              <input type="text" placeholder="Enter your company name here" />
            </label>
            <div>
              <button>cancel</button>
              <button>Add Job</button>
            </div>
          </form>
        </div>
        <div id="add-job-right">
          <img src={AddJobPageBackround} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AddJobDescription;
