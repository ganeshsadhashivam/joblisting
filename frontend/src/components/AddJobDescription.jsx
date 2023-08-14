import React from "react";
import AddJobPageBackround from "../assets/WallpaperDog-20567151 1.png";

import "./AddJobDescriptionmodule.css";
const AddJobDescription = () => {
  return (
    <section>
      <div className="add-job-page">
        <div id="add-job-left">
          <form action="">
            <div className="job-inputs">
              <h1>Add job description</h1>
              <div className="input-and-labels">
                <label htmlFor="">Company Name</label>
                <input type="text" placeholder="Enter your company name here" />
              </div>
              <div>
                <label htmlFor="">Add logo URL</label>
                <input type="text" placeholder="Enter the link" />
              </div>
              <div>
                <label htmlFor="">Job position</label>
                <input type="text" placeholder="Enter Job position" />
              </div>
              <div>
                <label htmlFor="">Monthly salary</label>
                <input type="text" placeholder="Enter Amount in rupees" />
              </div>
              <div>
                <label htmlFor="">Job Type</label>
                <select name="jobtype" id="jobType">
                  <option value="Fixed">Fixed</option>
                  <option value="Contract">Contract</option>
                  <option value="FullTime">FullTime</option>
                  <option value="PartTime">PartTime</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Remote/office</label>
                <select name="joblocation" id="joblocation">
                  <option value="Office">Office</option>
                  <option value="WorkFromHome">WorkFromHome</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Location</label>
                <input type="text" placeholder="Enter Location" />
              </div>
              <div>
                <label htmlFor="">Job Description</label>
                {/* <input
                  type="textarea"
                  color=""
                  placeholder="Type the Job Description"
                /> */}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Type the Job Description"
                ></textarea>
              </div>
              <div>
                <label htmlFor="">About Company</label>
                {/* <input type="text" placeholder="Type About Your Company" /> */}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Type About Your Company"
                ></textarea>
              </div>
              <div>
                <label htmlFor="">Skills Required</label>
                <input type="text" placeholder="Enter the must have skills" />
              </div>
              <div>
                <label htmlFor="">Information</label>
                <input
                  type="text"
                  placeholder="Enter the additional information"
                />
              </div>
              <div>
                <label htmlFor="">Company Name</label>
                <input type="text" placeholder="Enter your company name here" />
              </div>
            </div>
            <div className="add-job-descrption-buttons">
              <div>
                <button id="cancel">cancel</button>
                <button id="addjob">+Add Job</button>
              </div>
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
