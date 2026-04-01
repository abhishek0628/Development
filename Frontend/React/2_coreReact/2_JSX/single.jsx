function App(){
    return(
        <div>
            <h1>hello</h1>
            <p>welcome</p>
        </div>
    )
}

//fragment
function App2() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}

import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome</p>
    </React.Fragment>
  );
}