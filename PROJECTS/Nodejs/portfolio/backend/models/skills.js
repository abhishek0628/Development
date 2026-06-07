
const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({

   Name: {
      type: String,
      required: true
   },

   Category: {
      type: String
   },

   Level: {
      type: String
   },

   Description: {
      type: String
   },

   Link: {
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

const Skills = mongoose.model(
   "skills",
   SkillSchema
);

module.exports = Skills;