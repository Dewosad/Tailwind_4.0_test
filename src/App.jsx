import React from "react";

const App = () => {
  return (
    //vite 4.0 test
    // for breakpoint min-[provide screen for breakpoint here min-[400px] represent screen greater than 400px will have text-green-500 otherwise red-500
    <div className="text-red-500 min-[400px]:text-green-500">
      <p>This is test</p>
    </div>
  );
};

export default App;
