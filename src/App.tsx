import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextStagger from "./components/text-stagger/text-stagger";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-items-center min-h-screen">
      <TextStagger>Hello World</TextStagger>
    </div>
  );
}

export default App;
