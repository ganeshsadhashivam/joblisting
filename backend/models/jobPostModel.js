import mongoose from "mongoose";

const jobPostSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    jobPosition: {
      type: String,
      required: true,
    },
    monthlySalary: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    remoteOrOffice: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    aboutCompany: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const jobs = mongoose.model("job", jobPostSchema);

export default jobPostSchema;
