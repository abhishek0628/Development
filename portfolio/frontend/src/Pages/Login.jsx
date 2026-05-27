// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // function Login() {

// //   const [form, setForm] = useState({
// //     email: "",
// //     password: ""
// //   });

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {

// //     setForm({
// //       ...form,
// //       [e.target.name]: e.target.value
// //     });

// //   };

// //   const handleSubmit = async () => {

// //     try {

// //       const res = await axios.post(
// //         "http://localhost:5001/login/api",
// //         form
// //       );

// //       console.log(res.data);

// //       if (res.data.user.role === "user") {

// //         navigate(`/userdash/${res.data.user.id}`);

// //       } else {

// //         navigate(`/admindash/${res.data.userId}`);

// //       }

// //     } catch (err) {

// //       console.log(err);

// //     }

// //   };

// //   return (

// //     <div>

// //       <input
// //         type="text"
// //         name="email"
// //         placeholder="email"
// //         onChange={handleChange}
// //       />

// //       <input
// //         type="password"
// //         name="password"
// //         placeholder="password"
// //         onChange={handleChange}
// //       />

// //       <button onClick={handleSubmit}>
// //         Login
// //       </button>

// //     </div>

// //   );

// // }

// // export default Login;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Login() {

//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {

//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });

//   };

//   const handleSubmit = async () => {

//     try {

//       const res = await axios.post(
//         "http://localhost:5001/login/api",
//         form
//       );

//       console.log(res.data);

//       // STORE TOKEN
//       localStorage.setItem(
//         "token",
//         res.data.token
//       );

//       // STORE USER
//       localStorage.setItem(
//         "user",
//         JSON.stringify(res.data.user)
//       );

//       // NAVIGATE
//       if (res.data.user.role === "user") {

//         navigate(`/userdash/${res.data.user.id}`);

//       } else {

//         navigate(`/admindash/${res.data.user.id}`);

//       }

//     } catch (err) {

//       console.log(err);

//     }

//   };

//   return (

//     <div>

//       <input
//         type="text"
//         name="email"
//         placeholder="email"
//         onChange={handleChange}
//       />

//       <input
//         type="password"
//         name="password"
//         placeholder="password"
//         onChange={handleChange}
//       />

//       <button onClick={handleSubmit}>
//         Login
//       </button>

//     </div>

//   );

// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5001/login/api",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate(`/userdash/${res.data.user.id}`);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white p-3 rounded-lg hover:opacity-80"
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;