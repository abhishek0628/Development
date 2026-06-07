
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// function Courses() {

//     const { id } = useParams();

//     const navigate = useNavigate();

//     const user = JSON.parse(
//         localStorage.getItem("user")
//     );

//     const [courses, setCourses] = useState([]);

//     useEffect(() => {

//         const fetchCourses = async () => {

//             try {

//                 const res = await axios.get(
//                     `http://localhost:5001/api/getCourse/${id}`
//                 );

//                 setCourses(res.data);

//                 console.log(res.data);

//             } catch (error) {

//                 console.log(error);

//             }

//         };

//         fetchCourses();

//     }, [id]);

// //     const handleDelete = async (projectId) => {

// //    try {

// //       await axios.delete(
// //          `http://localhost:5001/api/delete/${projectId}`
// //       );

// //       setProjects(
// //          projects.filter(
// //             (project) => project._id !== projectId
// //          )
// //       );

// //    } catch (err) {

// //       console.log(err);

// //    }

// // };
// //      const handleUpdate=async(projectId)=>{
// //       try{
// //          const res=axios.patch(`http://localhost:5001/api/update/${projectId}`,
// //         //     {
// //         //     frontend: "Next.js"
// //         //  }

// //          );
// //           navigate(
// //                             `/userdash/${user?.id}/project/updateProject`
// //                         )

// //       }catch(err){
// //          console.log(err);
// //       }
// //     }

//     return (

//         <div className="min-h-screen bg-black text-white p-10">

//             <div className="flex justify-between items-center mb-8">

//                 <h1 className="text-4xl font-bold">
//                     My Projects
//                 </h1>

//                 <button
//                     onClick={() =>
//                         navigate(
//                             `/userdash/${user?.id}/course/addcourse`
//                         )
//                     }
//                     className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600"
//                 >
//                     Add Course
//                 </button>

//             </div>

//             {
//                 courses.length === 0 ? (

//                     <p className="text-gray-400">
//                         No projects found
//                     </p>

//                 ) : (

//                     courses.map((course) => (

//                         <div
//                             key={courses._id}
//                             className="border border-gray-700 rounded-xl p-6 mb-6 bg-gray-900"
//                         >

//                             <h2 className="text-2xl font-semibold mb-3">
//                                 {course.projectName}
//                             </h2>

//                             <p className="mb-2">
//                                 <span className="font-bold">
//                                     Description:
//                                 </span>{" "}
//                                 {course.description}
//                             </p>

//                             {/* <p className="mb-2">
//                                 <span className="font-bold">
//                                     Backend:
//                                 </span>{" "}
//                                 {project.backend}
//                             </p>

//                             <p className="mb-2">
//                                 <span className="font-bold">
//                                     Frontend:
//                                 </span>{" "}
//                                 {project.frontend}
//                             </p>
//                             <p className="mb-2">
//                                 <span className="font-bold">
//                                     Github:
//                                 </span>{" "}
//                                 <a
//                                 href={project.GithubLink}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="text-blue-400 underline"
//                             >
//                                 {project.GithubLink}
//                             </a>
//                             </p>

//                             <br></br><br></br>
//                    <button
//    onClick={() => handleDelete(project._id)}
//    className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600"
// >
//    Delete Project
// </button>
//                     <button
//    onClick={() =>
//       navigate(
//          `/userdash/${user?.id}/project/update/${project._id}`
//       )
//    }
//    className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600"
// >
//    Update Project
// </button> */}

//                         </div>

//                     ))

//                 )
//             }

//         </div>

//     );

// }

// export default Courses;




import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Projects() {

    const { id } = useParams();

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        const fetchProjects = async () => {

            try {

                const res = await axios.get(
                    `http://localhost:5001/api/getcourse/${id}`
                );

                setProjects(res.data);

                console.log(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchProjects();

    }, [id]);

//     const handleDelete = async (projectId) => {

//    try {

//       await axios.delete(
//          `http://localhost:5001/api/deleteCourse/${projectId}`
//       );

//       setProjects(
//          projects.filter(
//             (project) => project._id !== projectId
//          )
//       );

//    } catch (err) {

//       console.log(err);

//    }

// };
//      const handleUpdate=async(projectId)=>{
//       try{
//          const res=axios.patch(`http://localhost:5001/api/updatecourse/${projectId}`,
//         //     {
//         //     frontend: "Next.js"
//         //  }

//          );
//           navigate(
//                             `/userdash/${user?.id}/project/updateProject`
//                         )

//       }catch(err){
//          console.log(err);
//       }
//     }

    return (

        <div className="min-h-screen bg-black text-white p-10">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">
                    My Projects
                </h1>

                <button
                    onClick={() =>
                        navigate(
                            `/userdash/${user?.id}/course/addcourse`
                        )
                    }
                    className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Course
                </button>

            </div>

            {
                projects.length === 0 ? (

                    <p className="text-gray-400">
                        No projects found
                    </p>

                ) : (

                    projects.map((project) => (

                        <div
                            key={project._id}
                            className="border border-gray-700 rounded-xl p-6 mb-6 bg-gray-900"
                        >

                            <h2 className="text-2xl font-semibold mb-3">
                                {project.courseName}
                            </h2>

                            <p className="mb-2">
                                <span className="font-bold">
                                    Description:
                                </span>{" "}
                                {project.description}
                            </p>

                            {/* <p className="mb-2">
                                <span className="font-bold">
                                    Backend:
                                </span>{" "}
                                {project.backend}
                            </p>

                            <p className="mb-2">
                                <span className="font-bold">
                                    Frontend:
                                </span>{" "}
                                {project.frontend}
                            </p> */}
                            <p className="mb-2">
                                <span className="font-bold">
                                    Github:
                                </span>{" "}
                                <a
                                href={project.Link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400 underline"
                            >
                                {project.Link}
                            </a>
                            </p>

                            <br></br><br></br>
                   <button
   onClick={() => handleDelete(project._id)}
   className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600"
>
   Delete Project
</button>
                    <button
   onClick={() =>
      navigate(
         `/userdash/${user?.id}/project/update/${project._id}`
      )
   }
   className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600"
>
   Update Project
</button>

                        </div>

                    ))

                )
            }

        </div>

    );

}

export default Projects;