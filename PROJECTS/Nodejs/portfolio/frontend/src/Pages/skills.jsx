
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Skills() {

    const { id } = useParams();

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const [skills, setSkills] = useState([]);

    useEffect(() => {

        const fetchSkills = async () => {

            try {

                const res = await axios.get(
                    `http://localhost:5001/api/getSkill/${id}`
                );

                setSkills(res.data);

                console.log(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchSkills();

    }, [id]);

//     const handleDelete = async (projectId) => {

//    try {

//       await axios.delete(
//          `http://localhost:5001/api/delete/${projectId}`
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
     const handleUpdate=async(skillId)=>{
      try{
         const res=axios.patch(`http://localhost:5001/api/update/${skillId}`,
        //     {
        //     frontend: "Next.js"
        //  }

         );
          navigate(
                            `/userdash/${user?.id}/project/updateSkill`
                        )

      }catch(err){
         console.log(err);
      }
    }

    return (

        <div className="min-h-screen bg-black text-white p-10">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">
                    My Skills
                </h1>

                <button
                    onClick={() =>
                        navigate(
                            `/userdash/${user?.id}/skills/addskill`
                        )
                    }
                    className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Skills
                </button>

            </div>

            {
                skills.length === 0 ? (

                    <p className="text-gray-400">
                        No Skills found
                    </p>

                ) : (

                    skills.map((skill) => (

                        <div
                            key={skill._id}
                            className="border border-gray-700 rounded-xl p-6 mb-6 bg-gray-900"
                        >

                            <h2 className="text-2xl font-semibold mb-3">
                                {skill.Name}
                            </h2>

                            <p className="mb-2">
                                <span className="font-bold">
                                    category:
                                </span>{" "}
                                {skill.Category}
                            </p>

                            <p className="mb-2">
                                <span className="font-bold">
                                    level:
                                </span>{" "}
                                {skill.Level}
                            </p>

                            <p className="mb-2">
                                <span className="font-bold">
                                    Description:
                                </span>{" "}
                                {skill.Description}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">
                                    Link:
                                </span>{" "}
                                <a
                                href={skill.Link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400 underline"
                            >
                                {skill.Link}
                            </a>
                            </p>

                            <br></br><br></br>
                   {/* <button
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
</button> */}

                        </div>

                    ))

                )
            }

        </div>

    );

}

export default Skills;