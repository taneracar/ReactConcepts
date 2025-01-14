import React, { useState } from "react";

const FormComponent = () => {
  const [nameValue, setnameValue] = useState("");
  const [emailValue, setemailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  function handleInputChange(event) {
    const { value } = event.target;
    setnameValue(value);
  }
  function handleEmailChange(event) {
    const { value } = event.target;
    setemailValue(value);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(nameValue, emailValue);
  }
  return (
    <div>
      <h1>Form</h1>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
