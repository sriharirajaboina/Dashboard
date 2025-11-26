import React from "react";
import { useTheme } from "../context/ThemeContex"; 

const Footer = () => {
  const { darkMode } = useTheme();

  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const textColor = darkMode ? "text-gray-400" : "text-[#6F767E]";
  const nameColor = darkMode ? "text-white" : "text-[#07275A]";

  return (
    <footer className={`w-full py-4 px-6 ${bgColor} ${textColor}`}>
      <h1 className="text-sm sm:text-base sm:flex-row items-center gap-1">
        © 2024 
        <span className={`font-medium ${nameColor}`}>
          &nbsp;abbdullarayhan@gmail.com
        </span>
        <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
        <span>All rights reserved.</span>
      </h1>
    </footer>
  );
};

export default Footer;

