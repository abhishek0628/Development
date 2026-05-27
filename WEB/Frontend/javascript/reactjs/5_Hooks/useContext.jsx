import React, { useState, useContext, createContext } from "react";
import { createRoot } from "react-dom/client";

// 1️⃣ Create the Context
const UserContext = createContext();

// 2️⃣ Create a Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 3️⃣ Create Components that consume the context
function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <header style={{ marginBottom: "20px" }}>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </header>
  );
}

function LoginForm() {
  const { login } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) login(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: "10px" }}>
        Login
      </button>
    </form>
  );
}

function MainContent() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? <p>This is protected content visible only to logged-in users.</p> : <p>Please log in to see content.</p>}
    </div>
  );
}

// 4️⃣ App Component
function App() {
  return (
    <UserProvider>
      <Header />
      <LoginForm />
      <MainContent />
    </UserProvider>
  );
}

// 5️⃣ Render
const root = createRoot(document.getElementById("root"));
root.render(<App />);