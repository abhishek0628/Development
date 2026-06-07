import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-10 py-6">

        <h1 className="text-3xl font-bold">
          MyApp
        </h1>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-white text-black rounded-lg hover:opacity-80 transition"
          >
            Register
          </Link>

        </div>

      </nav>

      {/* HERO SECTION */}

      <div className="flex flex-col justify-center items-center text-center h-[80vh] px-6">

        <h1 className="text-6xl font-extrabold mb-6">
          Welcome to MyApp
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Secure authentication system using
          React, Express, MongoDB and JWT.
        </p>

        <div className="flex gap-6">

          <Link
            to="/login"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            to="/register"
            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Home;