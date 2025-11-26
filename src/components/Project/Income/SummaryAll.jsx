import React from "react";
import data from "../../../Data/Data.json";

const SummaryAll = ({ darkMode = false }) => {
  const summary = data.summary || [];

  const getIcon = (id) =>
    new URL(`../../../assets/summary/${id}`, import.meta.url).href;

  // Light mode card colors
  const lightBgColors = {
    1: "#FFC7001A",
    2: "#1BFF4D1A",
    3: "#3360FF1A",
    4: "#FF1B881A",
    5: "#E6FFFB",
    6: "#E6FFFB",
    7: "#D9D9FF",
  };

  // Dark mode card colors
  const darkBgColors = {
    1: "#FFC70033",
    2: "#1BFF4D33",
    3: "#3360FF33",
    4: "#FF1B8833",
    5: "#0F171F",
    6: "#0F171F",
    7: "#1A1F2A",
  };

  const bgColors = darkMode ? darkBgColors : lightBgColors;
  const containerBg = darkMode ? "bg-gray-800 text-white" : "bg-white text-black";

  return (
    <div className={`p-3 rounded-lg shadow w-full ${containerBg}`}>
      <h2 className={`font-bold text-base mb-4 ${darkMode ? "text-white" : "text-[#222]"}`}>
        Overall Summary
      </h2>
      <div className="flex flex-col gap-3">
        {summary.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg flex flex-row items-start sm:items-center justify-between gap-4 shadow"
            style={{ backgroundColor: bgColors[item.id] || (darkMode ? "#1F2937" : "#F0F7FF") }}
          >
            {/* Left part: icon + name */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img src={getIcon(item.icon)} alt={item.name} className="w-7 h-7" />
              <h3 className={`text-sm sm:text-base font-semibold truncate ${darkMode ? "text-white" : "text-gray-600"}`}>
                {item.name}
              </h3>
            </div>

            {/* Right part: value */}
            <div className="flex-shrink-0">
              <h3 className={`text-lg sm:text-xl font-bold text-right ${darkMode ? "text-white" : "text-black"}`}>
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryAll;




