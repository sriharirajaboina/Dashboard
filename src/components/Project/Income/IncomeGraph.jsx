import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import alldata from "../../../Data/Data.json";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const IncomeWaveChart = ({ incomegraph }) => {
  const graphData = incomegraph || alldata.incomegraph || [];

  if (!Array.isArray(graphData) || graphData.length === 0) {
    return <p className="text-red-500">Income graph data missing</p>;
  }

  const labels = graphData.map((item) => item.label);
  const cleanNumber = (value) => Number(value.replace(/\$|,/g, ""));
  const incomeData = graphData.map((item) => cleanNumber(item.income));
  const profitData = graphData.map((item) => cleanNumber(item.profit));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "#09AF5F",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 6,
        hitRadius: 20,
        pointHoverBackgroundColor: "#09AF5F",
      },
      {
        label: "Profit",
        data: profitData,
        borderColor: "#FDD306",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 6,
        hitRadius: 20,
        pointHoverBackgroundColor: "#FDD306",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#ffffff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: (context) => {
            let value = context.raw.toLocaleString();
            return `${context.dataset.label}: $${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        suggestedMax: Math.max(...incomeData, ...profitData) * 1.05,
       ticks: {
        stepSize: 20000, 
        callback: (value) => {
          if (value >= 1000) return `${value / 1000}k`; 
          return value;
        },
      },
        grid: { display: true },
      },
      x: { offset: true, grid: { display: false } },
    },
  };

  return (
    <div className="w-full">
      <div className="h-64 sm:h-80 md:h-96">
        <Line data={chartData} options={options} />
      </div>

      {/* Custom Circle Legend */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#09AF5F]"></div>
          <span className="text-sm font-bold text-[#333]">Income</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FDD306]"></div>
          <span className="text-sm font-bold text-[#333]">Profit</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeWaveChart;



