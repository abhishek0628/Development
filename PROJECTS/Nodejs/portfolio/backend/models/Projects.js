
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({

   projectName: {
      type: String,
      required: true
   },

   description: {
      type: String
   },

   backend: {
      type: String
   },

   frontend: {
      type: String
   },

   GithubLink: {
      type: String
   },

   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
   }

}, {
   timestamps: true
});

const Project = mongoose.model(
   "projects",
   ProjectSchema
);

module.exports = Project;