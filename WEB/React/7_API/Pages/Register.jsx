import axios from "axios";
import { useState } from "react";

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:8001/register/api", form);
            alert("submitted");
            console.log(res.data);
        } catch (err) {
            console.error(err);
            alert("error submitting data");
        }
    };

    return (
        <div>
            <input 
                placeholder="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            /><br />

            <input 
                placeholder="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            /><br />

            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default Register;