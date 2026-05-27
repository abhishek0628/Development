function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

// Usage in parent
function App() {
  return <Greeting name="Abhishek" />;
}