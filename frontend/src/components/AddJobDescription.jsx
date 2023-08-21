import React, { useState } from "react";
import AddJobPageBackround from "../assets/WallpaperDog-20567151 1.png";

import "./AddJobDescriptionmodule.css";

import { useAddnewjobpostMutation } from "../slices/usersApiSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const AddJobDescription = () => {
  const [companyname, setCompanyName] = useState("");
  const [logourl, setLogoUrl] = useState("");
  const [jobposition, setJobPosition] = useState("");
  const [monthlysalary, setMonthlySalary] = useState("");
  const [jobtype, setJobType] = useState("");
  const [remoteoroffice, setRemoteOrOffce] = useState("");
  const [location, setLocation] = useState("");
  const [jobdescription, setJobDescription] = useState("");
  const [aboutcompany, setAboutCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [information, setInformation] = useState("");

  const dispatch = useDispatch();

  const [addNewJob, { isLoading }] = useAddnewjobpostMutation();
  const addJobDetails = async (e) => {
    e.preventDefault();
    try {
      const res = await addNewJob({
        companyname,
        logourl,
        jobposition,
        monthlysalary,
        jobtype,
        remoteoroffice,
        location,
        jobdescription,
        aboutcompany,
        skills,
        information,
      }).unwrap();
      dispatch(addNewJob({ res }));
      // navigate("/");
      console.log("job added");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <section>
      <div className="add-job-page">
        <div id="add-job-left">
          <form action="">
            <div className="job-inputs">
              <h1>Add job description</h1>
              <div className="input-and-labels">
                <label htmlFor="">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter your company name here"
                  value={companyname}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Add logo URL</label>
                <input
                  type="text"
                  placeholder="Enter the link"
                  value={logourl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Job position</label>
                <input
                  type="text"
                  placeholder="Enter Job position"
                  value={jobposition}
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Monthly salary</label>
                <input
                  type="text"
                  placeholder="Enter Amount in rupees"
                  value={monthlysalary}
                  onChange={(e) => setMonthlySalary(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Job Type</label>
                <select
                  name="jobtype"
                  id="jobType"
                  value={jobtype}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="Fixed">Fixed</option>
                  <option value="Contract">Contract</option>
                  <option value="FullTime">FullTime</option>
                  <option value="PartTime">PartTime</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Remote/office</label>
                <select
                  name="joblocation"
                  id="joblocation"
                  value={remoteoroffice}
                  onChange={(e) => setRemoteOrOffce(e.target.value)}
                >
                  <option value="Office">Office</option>
                  <option value="WorkFromHome">WorkFromHome</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  placeholder="Enter Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
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
                  value={jobdescription}
                  onChange={(e) => setJobDescription(e.target.value)}
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
                  value={aboutcompany}
                  onChange={(e) => setAboutCompany(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="">Skills Required</label>
                <input
                  type="text"
                  placeholder="Enter the must have skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Information</label>
                <input
                  type="text"
                  placeholder="Enter the additional information"
                  value={information}
                  onChange={(e) => setInformation(e.target.value)}
                />
              </div>
              {/* <div>
                <label htmlFor="">Company Name</label>
                <input type="text" placeholder="Enter your company name here" />
              </div> */}
            </div>
            <div className="add-job-descrption-buttons">
              <div>
                <button id="cancel">cancel</button>
                <button id="addjob" onClick={(e) => addJobDetails(e)}>
                  +Add Job
                </button>
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
