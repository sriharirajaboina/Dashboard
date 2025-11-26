import React from "react";
import { Sun, Moon } from "lucide-react";

const Toggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="p-5">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-3"
      >
        <div className="w-40 h-10 bg-[#093373] rounded-full p-1 flex items-center">
          <div className="w-full h-8 flex relative rounded-full overflow-hidden">
            <div
              className={`w-1/2 h-full flex items-center justify-center gap-1 transition-all
              ${!darkMode ? "bg-white p-2 rounded-full" : "bg-transparent"}`}
            >
              <Sun size={16} className="text-black" />
              <span className="text-black font-semibold text-sm">Light</span>
            </div>
            <div
              className={`w-1/2 h-full flex items-center justify-center gap-1 transition-all
              ${darkMode ? "bg-white p-2 rounded-full" : "bg-transparent"}`}
            >
              <Moon size={16} className="text-blue-900" />
              <span className="text-blue-900 text-sm font-semibold">Dark</span>
            </div>
            <div
              className={`absolute top-0 w-1/2 h-full rounded-full border-2 border-white/40 transition-all
              ${darkMode ? "translate-x-full" : "translate-x-0"}`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Toggle;
