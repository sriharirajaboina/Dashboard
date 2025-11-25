import React from "react";
import data from "../../../Data/Data.json";

const SummaryAll = () => {
  const summary = data.summary || [];


  const getIcon = (id) =>
  new URL(`../../../assets/summary/${id}`, import.meta.url).href;

  // Background color mapping
  const bgColors = {
    1: "#FFC7001A",
    2: "#1BFF4D1A",
    3: "#3360FF1A",
    4: "#FF1B881A",
    5:  "#E6FFFB",
    6:  "#E6FFFB",
    7:  "#D9D9FF"
  };

  return (
    <div className="mx-2 mt-5 p-2 bg-[#ffffff] rounded-lg">
      <h2 className="text-[#222222] font-bold">Over all Summary</h2>
      {summary.map((item) => (
        <div
          key={item.id}
          className="p-5 rounded-lg shadow flex items-center justify-between gap-4 mt-3"
          style={{ backgroundColor: bgColors[item.id] || "#F0F7FF" }}
        >
          <div className=" flex items-center justify-center gap-4">
            <img
              src={getIcon(item.icon)}
              alt={item.name}
              className="w-7 h-7"
            />
             <h3 className="text-base font-semibold text-gray-600">{item.name}</h3>
          </div>
          <div
          style={{ backgroundColor: bgColors[item.id] || "#F0F7FF" }}>
            <h3 className="text-xl font-bold">{item.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryAll;

