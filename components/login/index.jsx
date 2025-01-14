import React, { useState } from "react";
import CommonForm from "../common-form";
import { loginFormElements } from "../../src/config";

const initialFormData = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  const [loginFormData, setLoginFormData] = useState(initialFormData);
  function onHandleSubmit() {
    event.preventDefault();
    //api logic & database logic
    setLoginFormData(initialFormData)
  }

  return (
    <div>
      <h1>LoginComponent</h1>
      <CommonForm
        setFormData={setLoginFormData}
        formData={loginFormData}
        formControls={loginFormElements}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default LoginComponent;
