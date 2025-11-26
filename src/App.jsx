import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}`}>
      <Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;

