import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:8001/me", {
                    params: { email: storedUser.email }
                });

                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        if (storedUser?.email) {
            fetchUser();
        }
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>

            {user ? (
                <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Dashboard;