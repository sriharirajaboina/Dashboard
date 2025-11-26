import React from "react";
import logo from "../assets/sider/logo.png";
import dashboard from "../assets/Menu/dashboard.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../Data/Data.json";
import Toggle from "./Toggle";
import { useTheme } from "../context/ThemeContex";

const menuIcons = import.meta.glob("../assets/menu/*", { eager: true });

const Sider = ({ mobile = false, closeSidebar }) => {
  const { darkMode, setDarkMode } = useTheme();
  const menu = data.menu;
  const insight = data.insight;


  const getIcon = (fileName) => {
    const path = `../assets/menu/${fileName}`;
    return menuIcons[path]?.default || "";
  };

  return (
    <div
      className={`
        overflow-y-auto h-full px-3 py-6
        ${darkMode ? "bg-gray-900 text-white" : "bg-[#07275A] text-white"}
        ${mobile ? "w-full" : "w-60"}
      `}
    >
      {mobile && (
        <div className="flex justify-end mb-4">
          <button onClick={closeSidebar} className="text-3xl text-white">
            ✕
          </button>
        </div>
      )}

      <img src={logo} alt="logo" className="px-2 py-5 w-40 h-auto mb-8" />

      <div className="flex ml-3 mb-5 items-center">
        <img src={dashboard} className="w-6 h-6" alt="dashboard" />
        <h2 className="ml-3">Dashboard</h2>
      </div>

      <div className="mb-10">
        {menu.map((item) => (
          <Accordion
            key={item.id}
            sx={{
              backgroundColor: "transparent",
              color: "inherit",
              boxShadow: "none",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            >
              
              <img src={getIcon(item.icon)} className="w-6 h-6 mr-3" />
              {item.title}
            </AccordionSummary>
          </Accordion>
        ))}
      </div>

      <h2 className="text-base font-bold ml-3 mb-3">INSIGHTS</h2>

      {insight.map((item) => (
        <Accordion
          key={item.id}
          sx={{
            backgroundColor: "transparent",
            color: "inherit",
            boxShadow: "none",
            width: "100%",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            
            <img src={getIcon(item.icon)} className="w-6 h-6 mr-3" />
            {item.title}
          </AccordionSummary>
        </Accordion>
      ))}

      <div className="mt-6 ml-3">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default Sider;




