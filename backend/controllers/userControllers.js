import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Job from "../models/jobPostModel.js";
//@desc Auth user/set token
//route POST /api/users/auth
//@access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

//@desc Register a new user
//route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password } = req.body;

  console.log(name);

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }

  const user = await User.create({
    name,
    email,
    mobile,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

const newJobPost = asyncHandler(async (req, res) => {
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
  } = req.body;

  const jobs = await Job.create({
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
  });

  if (jobs) {
    res.status(201).json({
      _id: jobs._id,
      companyName: jobs.companyName,
      logoUrl: jobs.logoUrl,
      jobPosition: jobs.jobPosition,
      monthlySalary: jobs.monthlySalary,
      jobType: jobs.jobType,
      remoteOrOffice: jobs.remoteOrOffice,
      location: jobs.location,
      jobDescription: jobs.jobDescription,
      aboutCompany: jobs.aboutCompany,
      skillsRequired: jobs.skillsRequired,
      information: jobs.information,
    });
  } else {
    res.status(400);
    throw new Error("Job Post not created");
  }
});

//@desc Logout
//route POST /api/users/logout
//@access Public

const logoutUser = asyncHandler((req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User Logged Out" });
});

const getAllJobPost = asyncHandler(async (req, res) => {
  // const allJobs = {
  //   _id: allJobs._id,
  //   companyName: allJobs.companyName,
  //   logoUrl: allJobs.logoUrl,
  //   jobPosition: allJobs.jobPosition,
  //   monthlySalary: allJobs.monthlySalary,
  //   jobType: allJobs.jobType,
  //   remoteOrOffice: allJobs.remoteOrOffice,
  //   location: allJobs.location,
  //   jobDescription: allJobs.jobDescription,
  //   aboutCompany: allJobs.aboutCompany,
  //   skillsRequired: allJobs.skillsRequired,
  //   information: allJobs.information,
  // };

  const allJobs = await Job.find({});
  res.status(200).json(allJobs);
});

//@desc Get user Profile
//route POST /api/users/profile
//@access Private

const getUserProfile = asyncHandler((req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

//@desc Update user profile
//route Put /api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }

  // res.status(200).json({ message: "Update User Profile" });
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  newJobPost,
  getAllJobPost,
};
