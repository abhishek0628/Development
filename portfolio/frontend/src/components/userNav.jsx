import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-lg">

     

      <div className="flex items-center gap-6">

        {/* <button
          onClick={() => navigate("/")}
          className="hover:text-gray-300"
        >
          Home
        </button> */}
         <button
           onClick={() => navigate("/")}
          className="bg-balack-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Home
        </button>

        {/* <button
  onClick={() => navigate(`/userdash/${user?.id}/project`)}
  className="hover:text-gray-300"
>
  Projects
</button> */}
 <button
           onClick={() => navigate(`/userdash/${user?.id}/project`)}
          className="bg-balack-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Projects
        </button>

        {/* <button
          onClick={() => navigate(`/userdash/${user?.id}`)}
          className="hover:text-gray-300"
        >
          Dashboard
        </button> */}
         <button
          onClick={() => navigate(`/userdash/${user?.id}`)}
          className="bg-balack-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Dashboard
        </button>

        

        {/* <p className="text-sm text-gray-300">
          {user?.name}
        </p> */}

           <button
          onClick={() => navigate(`/userdash/${user?.id}/courses`)}
          className="bg-balack-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Courses
        </button>
           <button
          onClick={() => navigate(`/userdash/${user?.id}/Skills`)}
          className="bg-balack-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Skills
        </button>
        <p className="text-sm text-gray-300">
          {user?.name}
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;