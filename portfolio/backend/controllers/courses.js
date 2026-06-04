
const express = require("express");

const router = express.Router();

const Course = require("../models/courses.js");


// ADD PROJECT

router.post("/api/addCourse", async (req, res) => {

   try {

      const {
         courseName,
         description,
        //  backend,
        //  frontend,
         Link,
         userId
      } = req.body;

      const course = await Course.create({

         courseName,
         description,
        //  backend,
        //  frontend,
         Link,
         userId

      });

      res.status(201).json({

         message: "Project added successfully",

         course

      });

   } catch (err) {

      console.log(err);

      res.status(500).json({

         message: "Server error"

      });

   }

});

// router.get("/api/project/:id", async (req, res) => {

//    try {

//       const project = await Project.findById(
//          req.params.id
//       );

//       res.status(200).json(project);

//    } catch (err) {

//       console.log(err);

//       res.status(500).json({
//          message: "Server error"
//       });

//    }

// });


// GET USER PROJECTS

router.get("/api/getcourse/:id", async (req, res) => {

   try {

      const { id } = req.params;

      const courses = await Course.find({
         userId: id
      });

      res.status(200).json(courses);

   } catch (err) {

      console.log(err);

      res.status(500).json({
         message: "Server error"
      });

   }

});
// router.delete("/api/delete/:id",async(req,res)=>{
//    try{
//       const {id}=req.params;
//       const project=await Project.findByIdAndDelete({
//          userId:id
//       })
//       res.status(200).json({
//          message:"deleted"
//       })
//    }catch(err){
//       console.log(err);
//    }
// })

// router.delete("/api/delete/:id", async (req, res) => {

//    try {

//       const { id } = req.params;

//       const project = await Project.findByIdAndDelete(id);

//       if (!project) {

//          return res.status(404).json({
//             message: "Project not found"
//          });

//       }

//       res.status(200).json({
//          message: "Deleted successfully"
//       });

//    } catch (err) {

//       console.log(err);

//       res.status(500).json({
//          message: "Server error"
//       });

//    }

// });
// router.patch("/api/update/:id",async(req,res)=>{
//    try{
//       const project=await Project.findByIdAndUpdate({
//          {userId:id},
//          req.body,
//          {new:true}
//       })
//       if(!project){
//          return res.status(404).json({
//             message:"not found"
//          })
//       }
      
//    }catch(err){
//       console.log(err);

//    }
// })
// router.patch("/api/update/:id", async (req, res) => {

//    try {

//       const { id } = req.params;

//       const updatedProject = await Project.findByIdAndUpdate(

//          id,

//          req.body,

//          {
//             new: true
//          }

//       );

//       if (!updatedProject) {

//          return res.status(404).json({
//             message: "Project not found"
//          });

//       }

//       res.status(200).json({

//          message: "Project updated successfully",

//          updatedProject

//       });

//    } catch (err) {

//       console.log(err);

//       res.status(500).json({
//          message: "Server error"
//       });

//    }

// });


module.exports = router;