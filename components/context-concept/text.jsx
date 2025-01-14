import React, { useContext } from "react";
import { GlobalContext } from "../../src/context/index";

const ContextTextComponents = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <h1
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "RGB(36 36 36)" : "black",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
      Taner Acar
    </h1>
  );
};

export default ContextTextComponents;
