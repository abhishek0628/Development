
const express = require("express");

const router = express.Router();

const Skill = require("../models/skills.js");


// ADD PROJECT

router.post("/api/addSkill", async (req, res) => {

   try {

      const {
        Name,
         Category,
         Level,
         Description,
         Link,
         userId
      } = req.body;

      const skill = await Skill.create({

        Name,
         Category,
         Level,
         Description,
         Link,
         userId

      });

      res.status(201).json({

         message: "Skill added successfully",

         skill

      });

   } catch (err) {

      console.log(err);

      res.status(500).json({

         message: "Server error"

      });

   }

});

// router.get("/api/getSkill/:id", async (req, res) => {

//    try {

//       const skill = await Skill.findById(
//          req.params.id
//       );

//       res.status(200).json(skill);

//    } catch (err) {

//       console.log(err);

//       res.status(500).json({
//          message: "Server error"
//       });

//    }

// });


// // GET USER PROJECTS

router.get("/api/getSkill/:id", async (req, res) => {

   try {

      const { id } = req.params;

      const skill = await Skill.find({
         userId: id
      });

      res.status(200).json(skill);

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