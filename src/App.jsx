import { useState } from "react";

import "./App.css";

import Visualizer from "./Visualizer/Visualizer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Selection Sort Visualizer</h1>
      <Visualizer />
    </>
  );
}

export default App;
