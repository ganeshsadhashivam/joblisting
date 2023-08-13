import express from "express";

import dotenv from "dotenv";

import cookieParser from "cookie-parser";

dotenv.config();

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

connectDB();
const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is Ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

//#######Routes
//--**POST /api/users**-- Register a user
//--**POST /api/users/auth**-- Authenticate a user and get token
//--**POST /api/users/logout**-- logout user and clear cookie
//--**GET /api/users/profile**-- Get user profile
//--**PUT /api/users/profile**-- update a profile

// const express = require("express");

// const bodyParser = require("body-parser");

// const mongoose = require("mongoose");

// const cors = require("cors");

// const dotenv = require("dotenv");
// dotenv.config();

// const app = express();

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors());
// // parse application/json
// app.use(bodyParser.json());

// app.use(express.static("/public"));

// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => console.log("DB connected successfully"))
//   .catch((error) => console.log(error));

/*Routes*/
// app.get("/", (req, res) => {
//   res.send("we are learning Express.js");
// });

// const middleware = (req, res, next) => {
//   let isLoggedIn = false;
//   if (isLoggedIn) {
//     next();
//   } else {
//     res.send("you cant access the content");
//   }
// };

// app.get("/api/register", (req, res) => {
//   res.send("refisteration page");
// });

// app.get("/about", (req, res) => {
//   res.send("About us");
// });

// app.get("/contact", (req, res) => {
//   res.send("contact us");
// });

// app.get("/users", middleware, (req, res) => {
//   let users = [
//     {
//       firstName: "ganesh",
//       lastName: "sadhashivam",
//     },
//     {
//       firstName: "george",
//       lastName: "loothersamy",
//     },
//     {
//       firstName: "anbu",
//       lastName: "selvam",
//     },
//   ];
//   res.json(users);
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/backend/public/Registration.html");
// });

// app.get("/download", (req, res) => {
//   res.download(__dirname + "/pentol-stiker-pentol.gif");
// });

// app.listen(3001, () => {
//   console.log("server running on http://localhost:3000");
// });

// app.use("/api/auth", require("./routes/auth"));
// server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(3001, () => {
//       console.log("Server is running on port 3001");
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// app.use("/api/auth", require("./routes/auth"));
