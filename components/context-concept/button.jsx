import React, { useContext } from "react";
import { GlobalContext } from "../../src/context";

const ContextButtonComponent = () => {
  const { handleChangeThemeOnButtonClick } = useContext(GlobalContext);

  return <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>;
};

export default ContextButtonComponent;
