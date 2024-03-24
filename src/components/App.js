import React, { useState } from "react";

import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div className="App">
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <p>Hover over me too</p>
      </Tooltip>
    </div>
  );
};

export default App;
