// import { useState } from "react";

// import axios from "axios";

// import { useNavigate } from "react-router-dom";

// function AddSkills() {

//    const navigate = useNavigate();

//    const user = JSON.parse(
//       localStorage.getItem("user")
//    );

//    const [Skills, setSkills] = useState({

//       Name: "",
//       Category: "",
//       Level: "",
//       Description:"",
//       Link: ""
//     //   GithubLink: ""

//    });

//    const handleAdd = async () => {

//       try {

//          const res = await axios.post(

//             "http://localhost:5001/api/addSkill",

//             {
//                ...Skills,
//                userId: user?.id
//             }

//          );

//          alert("Added successfully");

//          console.log(res.data);

//          navigate(`/userdash/${user?.id}/skills`);

//       } catch (err) {

//          console.log(err);

//       }

//    };

//    const handleChange = (e) => {

//       setSkills({

//          ...Skills,

//          [e.target.name]: e.target.value

//       });

//    };

//    return (

//       <div className="min-h-screen bg-black text-white flex justify-center items-center">

//          <div className="bg-gray-900 p-10 rounded-xl w-[500px]">

//             <h1 className="text-3xl font-bold mb-6">
//                Add Skills
//             </h1>

//             <div className="flex flex-col gap-4">

//                <input
//                   type="text"
//                   name="Name"
//                   placeholder="Enter Skill name"
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 outline-none"
//                />

//                <input
//                   type="text"
//                   name="Category"
//                   placeholder="category"
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 outline-none"
//                />

//                <input
//                   type="text"
//                   name="Level"
//                   placeholder="level"
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 outline-none"
//                />

//                <input
//                   type="text"
//                   name="Description"
//                   placeholder="description"
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 outline-none"
//                />

//                <input
//                   type="text"
//                   name="Link"
//                   placeholder="Link"
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 outline-none"
//                />

//                <button
//                   onClick={handleAdd}
//                   className="bg-blue-500 p-3 rounded hover:bg-blue-600"
//                >
//                   Add Skill
//                </button>

//             </div>

//          </div>

//       </div>

//    );

// }

// export default AddSkills;

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function AddSkills() {

   const navigate = useNavigate();

   const user = JSON.parse(
      localStorage.getItem("user")
   );

   const [skills, setSkills] = useState({

      Name: "",
      Category: "",
      Level: "",
      Description: "",
      Link: ""

   });

   const handleAdd = async () => {

      try {

         const res = await axios.post(

            "http://localhost:5001/api/addSkill",

            {
               ...skills,
               userId: user?.id
            }

         );

         alert("Added successfully");

         console.log(res.data);

         navigate(`/userdash/${user?.id}/skills`);

      } catch (err) {

         console.log(err);

      }

   };

   const handleChange = (e) => {

      setSkills({

         ...skills,

         [e.target.name]: e.target.value

      });

   };

   return (

      <div className="min-h-screen bg-black text-white flex justify-center items-center">

         <div className="bg-gray-900 p-10 rounded-xl w-[500px]">

            <h1 className="text-3xl font-bold mb-6">
               Add Skills
            </h1>

            <div className="flex flex-col gap-4">

               <input
                  type="text"
                  name="Name"
                  placeholder="Enter Skill Name"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="Category"
                  placeholder="Category"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="Level"
                  placeholder="Level"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="Description"
                  placeholder="Description"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <input
                  type="text"
                  name="Link"
                  placeholder="Link"
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 outline-none"
               />

               <button
                  onClick={handleAdd}
                  className="bg-blue-500 p-3 rounded hover:bg-blue-600"
               >
                  Add Skill
               </button>

            </div>

         </div>

      </div>

   );

}

export default AddSkills;