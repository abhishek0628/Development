import { useState } from "react";

function App() {
  // 1. String
  const [name, setName] = useState("");

  // 2. Number
  const [count, setCount] = useState(0);

  // 3. Boolean
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 4. Array
  const [todos, setTodos] = useState([]);

  // 5. Object
  const [user, setUser] = useState({
    age: 20,
    city: "Calicut"
  });

  return (
    <div>
      {/* String + Input */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Hello {name}</p>

      {/* Number */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>

      {/* Boolean */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Array */}
      <button onClick={() => setTodos([...todos, "New Task"])}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>

      {/* Object */}
      <p>Age: {user.age}</p>
      <button
        onClick={() =>
          setUser({ ...user, age: user.age + 1 })
        }
      >
        Increase Age
      </button>
    </div>
  );
}

export default App;