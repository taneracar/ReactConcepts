import React from "react";

const CommonInput = ({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "enter value here"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
