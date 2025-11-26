import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import data from "../../../../Data/Data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

// Arrow Plugin
const arrowPlugin = {
  id: "arrowPlugin",
  afterDatasetDraw(chart) {
    const { ctx } = chart;
    chart.getDatasetMeta(0).data.forEach((arc) => {
      const angle = arc.endAngle;
      const radius = arc.outerRadius;
      const cx = arc.x;
      const cy = arc.y;

      const tipX = cx + Math.cos(angle) * radius;
      const tipY = cy + Math.sin(angle) * radius;

      const baseX = cx + Math.cos(angle - 0.08) * (radius - 20);
      const baseY = cy + Math.sin(angle - 0.08) * (radius - 20);

      ctx.fillStyle = arc.options.backgroundColor;
      ctx.beginPath();
      ctx.moveTo(tipX, tipY);
      ctx.lineTo(baseX, baseY);

      ctx.closePath();
      ctx.fill();
    });
  },
};

ChartJS.register(arrowPlugin);

const DoughnutChat = ({ darkMode = false }) => {
  const [type, setType] = useState("Monthly");

  const doughnutData = data?.doughnutchat || [];
  const colors = ["#895BF1", "#DB5AEE", "#FFB536", "#217EFD"];

  const chartData = {
    labels: doughnutData.map((item) => item.label),
    datasets: [
      {
        data: doughnutData.map((item) => item.value),
        backgroundColor: colors,
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: "65%",
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
  };

  return (
    <div
      className={`p-4 rounded-xl shadow-md w-full`}
      style={{
        backgroundColor: darkMode ? "#1F2937" : "white",
        color: darkMode ? "#f3f4f6" : "#222222",
      }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <h3 className="text-lg font-semibold">{`Awards`}</h3>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-full px-3 py-2 text-sm w-full sm:w-auto"
          style={{
            backgroundColor: darkMode ? "#374151" : "#F0F7FF",
            color: darkMode ? "#f3f4f6" : "#222",
          }}
        >
          <option value="Monthly">Monthly</option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
        </select>
      </div>

      {/* Arrow Doughnut */}
      <div className="flex justify-center items-center mt-4 h-60 sm:h-64 md:h-72 w-full">
        <Doughnut data={chartData} options={options} />
      </div>

      {/* TEXT LIST BELOW */}
      <div className="mt-5 flex flex-col gap-2 sm:gap-3">
        {doughnutData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row sm:flex-row justify-between sm:items-center gap-2"
          >
            <div className="flex gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index] }}
              ></span>
              <span style={{ color: darkMode ? "#f3f4f6" : "#222" }} className="text-sm font-semibold">
                {item.label}
              </span>
            </div>
            <span style={{ color: darkMode ? "#f3f4f6" : "#222" }} className="text-sm font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChat;



