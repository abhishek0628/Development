import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import UserNav from "../components/userNav";

function UserDashboard() {

  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(

          `http://localhost:5001/user/${id}`,

          {
            headers: {
              authorization: token
            }
          }

        );

        setUser(res.data);

      } catch (err) {

        console.log(err);

      }

    };

    fetchUser();

  }, [id]);

  if (!user) {

    return <h1>Loading...</h1>;

  }

  // return (

  //   <div>

  //     <h1>User Dashboard</h1>

  //     <h2>Name: {user.name}</h2>

  //     <h2>Email: {user.email}</h2>

  //     <h2>Role: {user.role}</h2>

  //   </div>

  // );
  return (
    <div>
  <UserNav/>

  <div className="min-h-screen bg-gray-100 flex items-center justify-center">

    <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px]">

      <h1 className="text-3xl font-bold text-center mb-6">
        User Dashboard
      </h1>

      <div className="space-y-4">

        <div className="border rounded-lg p-4">

          <p className="text-gray-500 text-sm">
            Name
          </p>

          <h2 className="text-xl font-semibold">
            {user.name}
          </h2>

        </div>

        <div className="border rounded-lg p-4">

          <p className="text-gray-500 text-sm">
            Email
          </p>

          <h2 className="text-xl font-semibold">
            {user.email}
          </h2>

        </div>

        <div className="border rounded-lg p-4">

          <p className="text-gray-500 text-sm">
            Role
          </p>

          <h2 className="text-xl font-semibold capitalize">
            {user.role}
          </h2>

        </div>

      </div>

    </div>

  </div>
  </div>

);

}

export default UserDashboard;