import React from "react";
import logo from "../assets/sider/logo.png";
import dashboard from "../assets/Menu/dashboard.png"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../Data/Data.json";
import Toggle from "./Toggle";

const Sider = () => {
  const menu = data.menu;
  const insight=data.insight

  return (
    <div className="bg-[#07275A] h-auto">
      <img src={logo} alt="logo" 
      className="px-5 py-10 w-80 h-30"/>
      <div className="flex ml-4 mb-5">
        <img src={dashboard}
        className="w-6 h-6"/>
        <h2 className="text-white ml-3">Dashboard</h2>
      </div>

      <div className="mb-10">
        {menu.map((item) => {
          const iconPath = new URL(`../assets/menu/${item.icon}`, import.meta.url).href;
          return (
            <Accordion
              key={item.id}
              sx={{
                backgroundColor: "#07275A",
                color: "white",
                boxShadow: "none",
                width: 250, // set your desired width
                maxWidth: 250,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                <img
                  src={iconPath}
                  className="w-6 h-6 mr-3"
                  alt={item.title}
                />
                {item.title}
              </AccordionSummary>
            </Accordion>
          );
        })}
      </div>
      <div>
        <h2 className="text-white text-base font-bold ml-5 mb-3 ">INSIGHTS</h2>
        {insight.map((item) => {
          const iconPath = new URL(`../assets/menu/${item.icon}`, import.meta.url).href;
          return (
            <Accordion
              key={item.id}
              sx={{
                backgroundColor: "#07275A",
                color: "white",
                boxShadow: "none",
                width: 250, // set your desired width
                maxWidth: 250,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                <img
                  src={iconPath}
                  className="w-6 h-6 mr-3"
                  alt={item.title}
                />
                {item.title}
              </AccordionSummary>
            </Accordion>
          );
        })}
      </div>
      <Toggle/>
    </div>
  );
};

export default Sider;
