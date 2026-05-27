
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Userdash from "./Pages/userdash";
import Admindash from "./Pages/admindash";
import Projects from "./Pages/Projects";
import AddProjects from "./Pages/addprojects";
import UpdateProject from "./Pages/updateProject";
import Skills from "./Pages/skills";
import AddSkills from "./Pages/addSkills";
import Courses from "./Pages/courses";
import AddCourse from "./Pages/addCourse";

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/admindash/:id" element={<Admindash />} />
        <Route path="/userdash/:id/project" element={<Projects />} />
        <Route path="/userdash/:id/project/addproject" element={<AddProjects />} />
         <Route
   path="/userdash/:id/project/update/:projectId"
   element={<UpdateProject />}
/>

        <Route
          path="/userdash/:id"
          element={<Userdash />}
        />
        <Route path="/userdash/:id/skills" element={<Skills />} />
         <Route path="/userdash/:id/skills/addskill" element={<AddSkills />} />
         <Route path="/userdash/:id/courses" element={<Courses />} />
         <Route path="/userdash/:id/course/addcourse" element={<AddCourse />} />

      </Routes>

    </Router>
    

  );

}

export default App;