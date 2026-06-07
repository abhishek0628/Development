
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

   courseName: {
      type: String,
      required: true
   },

   description: {
      type: String
   },

//    backend: {
//       type: String
//    },

//    frontend: {
//       type: String
//    },

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

const Course = mongoose.model(
   "courses",
   courseSchema
);

module.exports = Course;