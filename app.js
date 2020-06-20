//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const thisPort = 8000;
const app = express();

const homeStartingContent = "Think Big!";
const paragraphContent = "Think in Joshua Organisation";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    startingContent: homeStartingContent,
    paragraphContent: paragraphContent,
  });
});
app.get("/about", function (req, res) {
  res.render("about", {
    startingContent: homeStartingContent,
  });
});

app.get("/service", function (req, res) {
  res.render("service");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.listen(process.env.PORT || thisPort, function () {
  console.log("Server started on port", thisPort);
});
