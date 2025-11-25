import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectTable from "../ProjectSummary/Table/ProjectTable";
import DoughnutChat from "../ProjectSummary/Table/DoughnutChat"

const ProjectSummary = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All Projects");

  const options = ["All Projects", "Ongoing", "Negotation", "Completed"];

  return (
    <div className="grid grid-cols-4 h-auto rounded-xl">
      <div className="col-span-3">
        <div className="flex justify-between bg-white space-y-4 relative overflow-visible p-4">
          <h2 className="text-xl font-semibold">Project Summary</h2>

          <div className="w-40 relative">
            <div
              className="bg-[#F0F7FF] rounded-full p-2 flex justify-center items-center cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <span>{selected}</span>
              <ExpandMoreIcon className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
            </div>

            {open && (
              <div className="absolute left-0 top-full w-full bg-[#F0F7FF] rounded-lg shadow-md z-50 mt-1">
                {options.map((item) => (
                  <div
                    key={item}
                    className="p-3 hover:bg-blue-100 cursor-pointer"
                    onClick={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          {/* ProjectTable inside summary receives filter prop */}
          <ProjectTable filter={selected} />
        </div>
      </div>

      <div className="col-span-1 mx-2 ">
        <DoughnutChat/>
      </div>
    </div>
  );
};

export default ProjectSummary;
