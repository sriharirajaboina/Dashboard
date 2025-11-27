import React from "react";
import logo from "../assets/sider/logo.png";
import dashboard from "../assets/menu/dashboard.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../Data/Data.json";
import Toggle from "./Toggle";
import { useTheme } from "../context/ThemeContex";

const menuIcons = import.meta.glob("../assets/menu/*.png", { eager: true });
const insightIcons = import.meta.glob("../assets/insight/*.png", { eager: true });

const Sider = ({ mobile = false, closeSidebar }) => {
  const { darkMode, setDarkMode } = useTheme();
  const menu = data.menu;
  const insight = data.insight;

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
        {menu.map((item) => {
          const iconPath =
            menuIcons[`../assets/menu/${item.icon}`]?.default ?? "";

          return (
            <div
              key={item.id}
              className="flex items-center justify-between px-2 py-3 cursor-pointer hover:bg-white/10 rounded-lg"
            >
              <div className="flex items-center">
                <img src={iconPath} className="w-6 h-6 mr-3" alt={item.title} />
                <span>{item.title}</span>
              </div>

              <ExpandMoreIcon sx={{ color: "white" }} />
            </div>
          );
        })}
      </div>

      
      <h2 className="text-base font-bold ml-3 mb-3">INSIGHTS</h2>

      {insight.map((item) => {
        const iconPath =
          insightIcons[`../assets/insight/${item.icon}`]?.default ?? "";

        return (
          <div
            key={item.id}
            className="flex items-center justify-between px-2 py-3 cursor-pointer hover:bg-white/10 rounded-lg"
          >
            
            <div className="flex items-center">
              <img src={iconPath} className="w-6 h-6 mr-3" alt={item.title} />
              <span>{item.title}</span>
            </div>

            <ExpandMoreIcon sx={{ color: "white" }} />
          </div>
        );
      })}

      <div className="mt-6 ml-3">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default Sider;




