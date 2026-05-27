import React, { useState } from "react";

function FormEvents() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // Handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  }

  // Handle focus
  function handleFocus(e) {
    console.log(`${e.target.name} focused`);
  }

  // Handle blur
  function handleBlur(e) {
    console.log(`${e.target.name} lost focus`);
  }

  // Handle invalid input
  function handleInvalid(e) {
    console.log(`${e.target.name} is invalid`);
  }

  // Handle reset
  function handleReset() {
    console.log("Form Reset");
    setFormData({ name: "", email: "" });
  }

  // Handle input (extra event)
  function handleInput(e) {
    console.log("Typing:", e.target.value);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Form Events Demo</h2>

      <form onSubmit={handleSubmit} onReset={handleReset}>
        
        {/* Name Input */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter name"
          />
        </div>

        <br />

        {/* Email Input */}
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInvalid={handleInvalid}
            required
            placeholder="Enter email"
          />
        </div>

        <br />

        {/* Buttons */}
        <button type="submit">Submit</button>
        <button type="reset" style={{ marginLeft: "10px" }}>
          Reset
        </button>

      </form>
    </div>
  );
}

export default FormEvents;