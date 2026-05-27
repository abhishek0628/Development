import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);      // store data
  const [loading, setLoading] = useState(true); // loading indicator
  const [error, setError] = useState(null);     // error handling

  useEffect(() => {
    // fetch data after first render
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json(); // parse JSON
      })
      .then((data) => {
        setUsers(data);    // update state
        setLoading(false); // stop loading
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // empty dependency → runs once

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

export default Users;