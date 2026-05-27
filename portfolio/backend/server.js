require("dotenv").config();

const express = require("express");
const db = require("./config/db.js");
const cors = require("cors");

const userRoutes = require("./controllers/user.js");
const ProjectRoutes = require("./controllers/projects.js");
const SkillRoutes = require("./controllers/skill.js");
const CourseRoutes = require("./controllers/courses.js");
// const SkillRoutes=require("/controllers/skill.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", userRoutes);
app.use("/",ProjectRoutes);
app.use("/",SkillRoutes);
app.use("/",CourseRoutes);

app.listen(5001, () => {
  console.log("Running on port 5001");
});