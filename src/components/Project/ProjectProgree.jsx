import React from "react";
import { useTheme } from "../../context/ThemeContex"; // adjust path
import complete from "../../assets/project/complete.png";
import pending from "../../assets/project/pending.png";
import income from "../../assets/project/income.png";
import pendingIncome from "../../assets/project/pending-income.png";
import ProjectSummary from "../Project/ProjectSummary/ProjectSummary";
import Income from "./Income/Income";

const ProjectProgree = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`mx-3 sm:mx-5 ${darkMode ? "bg-gray-900 text-white" : "bg-[#F0F7FF] text-black"}`}>
      <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className={`px-4 py-4 flex items-center justify-between rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-700" : "bg-[#F0F7FF]"}`}>
              <img src={complete} className="w-8 h-8" />
            </div>
            <div className="text-base ml-3">
              <h3 className="font-extrabold">24</h3>
              <h4 className={`${darkMode ? "text-gray-300" : "text-[#666666]"} text-sm font-semibold`}>
                Completed Project
              </h4>
            </div>
          </div>
          <div className="text-green-400 flex flex-col items-center">
            <h4 className="text-sm">&#8599;</h4>
            <h4 className="font-bold">1.3%</h4>
          </div>
        </div>

        <div className={`px-4 py-4 flex items-center justify-between rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-700" : "bg-[#F0F7FF]"}`}>
              <img src={pending} className="w-8 h-8" />
            </div>
            <div className="text-base ml-3">
              <h3 className="font-extrabold">07</h3>
              <h4 className={`${darkMode ? "text-gray-300" : "text-[#666666]"} text-sm font-semibold`}>
                Pending Project
              </h4>
            </div>
          </div>
          <div className="text-green-400 flex flex-col items-center">
            <h4 className="text-sm">&#8599;</h4>
            <h4 className="font-bold text-[#F93C65]">1.3%</h4>
          </div>
        </div>

        <div className={`px-4 py-4 flex items-center justify-between rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-700" : "bg-[#F0F7FF]"}`}>
              <img src={income} className="w-8 h-8" />
            </div>
            <div className="text-base ml-3">
              <h3 className="font-extrabold">$12,000</h3>
              <h4 className={`${darkMode ? "text-gray-300" : "text-[#666666]"} text-sm font-semibold`}>
                Total Income
              </h4>
            </div>
          </div>
          <div className="text-green-400 flex flex-col items-center">
            <h4 className="text-sm">&#8599;</h4>
            <h4 className="font-bold ">1.3%</h4>
          </div>
        </div>

        <div className={`px-4 py-4 flex items-center justify-between rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-700" : "bg-[#F0F7FF]"}`}>
              <img src={pendingIncome} className="w-8 h-8" />
            </div>
            <div className="text-base ml-3">
              <h3 className="font-extrabold">$12,000</h3>
              <h4 className={`${darkMode ? "text-gray-300" : "text-[#666666]"} text-sm font-semibold`}>
                Pending
              </h4>
            </div>
          </div>
          <div className="text-green-400 flex flex-col items-center">
            <h4 className="text-sm">&#8599;</h4>
            <h4 className="font-bold text-[#F93C65]">1.3%</h4>
          </div>
        </div>
      </div>
      
      <ProjectSummary darkMode={darkMode} />
      <Income darkMode={darkMode} />

    </div>
  );
};

export default ProjectProgree;
