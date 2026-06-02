import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Project() {

   const navigate = useNavigate();

   const user = JSON.parse(
      localStorage.getItem("user")
   );

   const [project, setProject] = useState({

      projectName: "",
      description: "",
      backend: "",
      frontend: "",
      GithubLink: ""

   });

   const handleAdd = async () => {

      try {

         const res = await axios.post(

            "http://localhost:5001/api/addproject",

            {
               ...project,
               userId: user?.id
            }

         );

         alert("Added successfully");

         console.log(res.data);

         navigate(`/userdash/${user?.id}/project`);

      } catch (err) {

         console.log(err);

      }

   };

   const handleChange = (e) => {

      setProject({

         ...project,

         [e.target.name]: e.target.value

      });

   };

   return (

      <div className="min-h-screen bg-black text-white flex justify-center items-center">

         <div className="bg-gray-900 p-10 rounded-xl w-[500px]">

            <h1 className="text-3xl font-bold mb-6">
               Add Project
            </h1>

            <div className="flex flex-col gap-4">

               <input
                  type="text"
                  name="projectName"
                  placeholder="Enter project name"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="backend"
                  placeholder="Backend"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="frontend"
                  placeholder="Frontend"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="GithubLink"
                  placeholder="Github Link"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <button
                  onClick={handleAdd}
                  className="bg-blue-500 p-3 rounded hover:bg-blue-600"
               >
                  Add Project
               </button>

            </div>

         </div>

      </div>

   );

}

export default Project;