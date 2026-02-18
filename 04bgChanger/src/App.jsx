import { useState } from "react";
import ColorOptions from "./components/ColorOptions";

function App() {
  const [color, setColor] = useState(
    localStorage.getItem("color") || "olive"
  );

  return (
    <div
      className="h-screen w-full relative"
      style={{ backgroundColor: color }}
    >
      <ColorOptions setColor={setColor} />
    </div>
  );
}

export default App;
