import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // ---------------- GET Users ----------------
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ---------------- POST User ----------------
  const addUser = async () => {
    try {
      const res = await axios.post(API_URL, newUser);
      setUsers([...users, res.data]);
      setNewUser({ name: "", email: "" });
    } catch (err) {
      setError("Failed to add user");
    }
  };

  // ---------------- PUT / PATCH User ----------------
  const updateUser = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, {
        name: "Updated Name",
        email: "updated@example.com",
      });
      setUsers(users.map(u => (u.id === id ? res.data : u)));
    } catch (err) {
      setError("Failed to update user");
    }
  };

  // ---------------- DELETE User ----------------
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter(u => u.id !== id));
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Axios CRUD Demo</h1>

      {/* Add New User */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {/* User List */}
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            {user.name} ({user.email}) &nbsp;
            <button onClick={() => updateUser(user.id)}>Update</button> &nbsp;
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;