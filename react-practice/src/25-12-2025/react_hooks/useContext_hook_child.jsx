import React, { useContext } from "react";
import ThemeContext from "./useContext_hook_ThemeContext";

function Child() {
  const theme = useContext(ThemeContext);

  return <h2>Current Theme: {theme}</h2>;
}

export default Child;
