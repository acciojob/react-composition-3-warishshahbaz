import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleMouseEnter() {
    setIsVisible(true);
  }

  function handleMouseLeave() {
    setIsVisible(false);
  }

  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && <div className="tooltiptext">{text}</div>}
    </div>
  );
}

export default Tooltip;
