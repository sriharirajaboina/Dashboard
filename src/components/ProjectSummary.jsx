import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProjectSummary = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All Projects");

  const options = ["All Projects", "Ongoing", "Negotation","Completed"];

  return (
    <div className="grid grid-cols-4 h-screen p-6">
      {/* LEFT SIDE */}
      <div className="col-span-3">
        <div className="flex items-center justify-between space-y-4">
          <h2 className="text-xl font-semibold mt-2">Project Summary</h2>

          {/* Inserted Dropdown */}
          <div className="w-52">
            <div
              className="bg-[#F0F7FF] rounded-lg p-3 flex justify-between items-center cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <span>{selected}</span>
              <ExpandMoreIcon
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            {open && (
              <div className="bg-[#F0F7FF] mt-1 rounded-lg shadow-md">
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
      </div>

      {/* RIGHT SIDE */}
      <div className="col-span-1">
        Project barchat
      </div>
    </div>
  );
};

export default ProjectSummary;
