import React, { useState } from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

const App = () => {
  const [state, setState] = useState();
  const [toggle, setToggle] = useState(false);
  const handleMouseEnter = (text) => {
    console.log("Entering");
    setState(text);
    setToggle(true);
  };
  const handleMouseLeave = () => {
    console.log("Leaveing");
    setToggle(false);
  };
  return (
    <div>
      <h3
        onMouseEnter={() => handleMouseEnter(" This is the tooltip")}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </h3>
      <p
        onMouseEnter={() => handleMouseEnter("This is another tooltip")}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me to see another tooltip
      </p>
      {toggle ? <Tooltip text={state} /> : ""}

      {/* Do not remove the main div */}
    </div>
  );
};

export default App;
