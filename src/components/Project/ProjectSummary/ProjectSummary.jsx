import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectTable from "../ProjectSummary/Table/ProjectTable";
import DoughnutChat from "../ProjectSummary/Table/DoughnutChat";

const ProjectSummary = ({ darkMode }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All Projects");
  const options = ["All Projects", "Ongoing", "Negotation", "Completed"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

      <div className="lg:col-span-3 flex flex-col gap-4">
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl relative ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
          <h2 className="text-xl font-semibold">Project Summary</h2>

          <div className="w-full sm:w-40 relative mt-2 sm:mt-0">
            <div
              className={`rounded-full p-2 flex justify-center items-center cursor-pointer ${darkMode ? "bg-gray-700 text-white" : "bg-[#F0F7FF]"}`}
              onClick={() => setOpen(!open)}
            >
              <span>{selected}</span>
              <ExpandMoreIcon className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
            </div>

            {open && (
              <div className={`absolute left-0 top-full w-full rounded-lg shadow-md z-50 mt-1 ${darkMode ? "bg-gray-700 text-white" : "bg-[#F0F7FF] text-black"}`}>
                {options.map((item) => (
                  <div
                    key={item}
                    className={`p-3 cursor-pointer hover:${darkMode ? "bg-gray-600" : "bg-blue-100"}`}
                    onClick={() => { setSelected(item); setOpen(false); }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ProjectTable filter={selected} darkMode={darkMode} />
      </div>

      <div className="lg:col-span-1">
        <DoughnutChat darkMode={darkMode} />
      </div>

    </div>
  );
};

export default ProjectSummary;


