import React, { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../src/config";

const initialRegisterFormData = {
  name: "",
  email: "",
  password: "",
};

const RegisterComponent = () => {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData
  );

  function handleregisterOnSubmit(event) {
    event.preventDefault();
    console.log(registerFormData);
    setRegisterFormData(initialRegisterFormData);
  }

  return (
    <div>
      <h1>RegisterComponent</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleregisterOnSubmit}
      />
    </div>
  );
};

export default RegisterComponent;
