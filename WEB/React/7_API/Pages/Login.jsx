import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({ email: "" });
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:8001/login/api", form);

            console.log(res.data);

            // store user (temporary auth)
            localStorage.setItem("user", JSON.stringify(res.data.user));

            // 🚀 redirect to dashboard
            navigate("/dashboard");

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <input
                placeholder="email"
                onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                }
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default Login;