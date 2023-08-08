const express = require("express");

const app = express();

/*Routes*/
// app.get("/", (req, res) => {
//   res.send("we are learning Express.js");
// });

const middleware = (req, res, next) => {
  let isLoggedIn = false;
  if (isLoggedIn) {
    next();
  } else {
    res.send("you cant access the content");
  }
};

app.get("/about", (req, res) => {
  res.send("About us");
});

app.get("/contact", (req, res) => {
  res.send("contact us");
});

app.get("/users", middleware, (req, res) => {
  let users = [
    {
      firstName: "ganesh",
      lastName: "sadhashivam",
    },
    {
      firstName: "george",
      lastName: "loothersamy",
    },
    {
      firstName: "anbu",
      lastName: "selvam",
    },
  ];
  res.json(users);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/download", (req, res) => {
  res.download(__dirname + "/pentol-stiker-pentol.gif");
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
