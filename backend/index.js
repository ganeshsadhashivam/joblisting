const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("/public"));

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connected successfully"))
  .catch((error) => console.log(error));

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

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
