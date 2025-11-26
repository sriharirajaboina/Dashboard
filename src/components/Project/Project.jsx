import React from 'react';
import ProjectProgree from "./ProjectProgree";
import { useTheme } from "../../context/ThemeContex"; // adjust path

const Project = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-[#F0F7FF] text-black"}`}>
      <ProjectProgree />
    </div>
  )
}

export default Project;
