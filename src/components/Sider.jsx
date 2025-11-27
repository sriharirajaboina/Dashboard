import React from "react";
import logo from "../assets/sider/logo.png";
import dashboard from "../assets/menu/dashboard.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../Data/Data.json";
import Toggle from "./Toggle";
import { useTheme } from "../context/ThemeContex";


const Sider = ({ mobile = false, closeSidebar }) => {
  const { darkMode, setDarkMode } = useTheme();
  const menu = data.menu;
  const insight = data.insight;

  const getMenuIcon = (file) =>
  new URL(`../assets/menu/${file}`, import.meta.url).href;

  const getInsightIcon = (file) =>
  new URL(`../assets/insight/${file}`, import.meta.url).href;

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

      {/* Logo */}
      <img src={logo} alt="logo" className="px-2 py-5 w-40 h-auto mb-8" />

      {/* Dashboard Section */}
      <div className="flex ml-3 mb-5 items-center">
        <img src={dashboard} className="w-6 h-6" alt="dashboard" />
        <h2 className="ml-3">Dashboard</h2>
      </div>

      {/* Menu Section (No Accordion) */}
      <div className="mb-10">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-2 py-3 cursor-pointer hover:bg-white/10 rounded-lg"
          >
            <div className="flex items-center">
              <img
                src={getMenuIcon(item.icon)}
                className="w-6 h-6 mr-3"
                alt={item.title}
              />
              <span>{item.title}</span>
            </div>

            <ExpandMoreIcon sx={{ color: "white" }} />
          </div>
        ))}
      </div>
      <h2 className="text-base font-bold ml-3 mb-3">INSIGHTS</h2>

      {insight.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between px-2 py-3 cursor-pointer hover:bg-white/10 rounded-lg"
        >
          <div className="flex items-center">
            <img
              src={getInsightIcon(item.icon)}
              className="w-6 h-6 mr-3"
              alt={item.title}
            />
            <span>{item.title}</span>
          </div>

          <ExpandMoreIcon sx={{ color: "white" }} />
        </div>
      ))}

      <div className="mt-6 ml-3">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default Sider;





