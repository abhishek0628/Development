function Form() {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" />
      
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" />
      
      <button type="submit">Login</button>
    </form>
  );
}

const age = 21;
return <p>{age >= 18 ? "Adult" : "Minor"}</p>;