import {
   useEffect,
   useState
} from "react";

import axios from "axios";

import {
   useNavigate,
   useParams
} from "react-router-dom";

function UpdateProject() {

   const navigate = useNavigate();

   const { id, skillId } = useParams();

   const [skill, setSkill] = useState({

      Name: "",
      Category: "",
      Level: "",
      Description: "",
      Link: ""

   });

   useEffect(() => {

      const fetchSkill = async () => {

         try {

            const res = await axios.get(
               `http://localhost:5001/api/skill/${skillId}`
            );

            setProject(res.data);

         } catch (err) {

            console.log(err);

         }

      };

      fetchProject();

   }, [projectId]);

   const handleChange = (e) => {

      setProject({

         ...project,

         [e.target.name]: e.target.value

      });

   };

   const handleUpdate = async () => {

      try {

         await axios.patch(

            `http://localhost:5001/api/update/${projectId}`,

            project

         );

         alert("Project updated");

         navigate(`/userdash/${id}/project`);

      } catch (err) {

         console.log(err);

      }

   };

   return (

      <div className="min-h-screen bg-black text-white flex justify-center items-center">

         <div className="bg-gray-900 p-10 rounded-xl w-[500px]">

            <h1 className="text-3xl font-bold mb-6">
               Update Project
            </h1>

            <div className="flex flex-col gap-4">

               <input
                  type="text"
                  name="projectName"
                  value={project.projectName}
                  onChange={handleChange}
                  placeholder="Project Name"
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="description"
                  value={project.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="backend"
                  value={project.backend}
                  onChange={handleChange}
                  placeholder="Backend"
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="frontend"
                  value={project.frontend}
                  onChange={handleChange}
                  placeholder="Frontend"
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="GithubLink"
                  value={project.GithubLink}
                  onChange={handleChange}
                  placeholder="Github Link"
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <button
                  onClick={handleUpdate}
                  className="bg-blue-500 p-3 rounded hover:bg-blue-600"
               >
                  Update Project
               </button>

            </div>

         </div>

      </div>

   );

}

export default UpdateProject;