import React, { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]); // store API data
  const [loading, setLoading] = useState(true); // track loading
  const [error, setError] = useState(null); // track errors

  useEffect(() => {
    // this function fetches data
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data); // update state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // empty array → run only once (componentDidMount)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;