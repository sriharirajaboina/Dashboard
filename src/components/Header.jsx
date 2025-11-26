import React, { useState } from "react";
import Country from "./Country";
import Sider from "./Sider";
import admin from "../assets/flags/usa.png";
import { useTheme } from "../context/ThemeContex"; // Adjust the path

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { darkMode } = useTheme(); // get darkMode from context

  // Conditional classes
  const headerBg = darkMode ? "bg-gray-900" : "bg-white";
  const inputBg = darkMode ? "bg-gray-800 text-white placeholder-gray-400" : "bg-[#F0F7FF] text-black placeholder-gray-400";
  const searchIconColor = darkMode ? "#fff" : "#007AFF";
  const nameColor = darkMode ? "text-white" : "text-black";
  const roleColor = darkMode ? "text-gray-400" : "text-gray-500";

  return (
    <>
      {openMenu && (
        <div className="fixed inset-0 bg-blue-600 z-50 sm:hidden flex flex-col text-white">
          <div className="flex-1 overflow-y-auto">
            <Sider mobile={true} closeSidebar={() => setOpenMenu(false)} />
          </div>
        </div>
      )}

      <div className={`${headerBg} flex items-center justify-between px-4 py-3 shadow-sm flex-wrap gap-4`}>
        <button
          onClick={() => setOpenMenu(true)}
          className="sm:hidden p-2"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={darkMode ? "#fff" : "#222"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="flex flex-1 items-center flex-wrap gap-3">
          <h2 className={`hidden md:block text-base sm:text-lg font-semibold whitespace-nowrap ${nameColor}`}>
            Acquisition Summary Overview:
          </h2>

          <div className="w-full sm:w-auto sm:ml-3">
            <div className={`flex items-center px-3 py-2 rounded-lg w-full sm:w-64 lg:w-80 ${inputBg}`}>
              <input
                type="text"
                placeholder="Search Here"
                className="bg-transparent outline-none w-full"
              />
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M10.6873 9.74467L13.5427 12.5993L12.5993 13.5427L9.74467 10.6873C8.68249 11.5388 7.36133 12.0019 6 12C2.688 12 0 9.312 0 6C0 2.688 2.688 0 6 0C9.312 0 12 2.688 12 6C12.0019 7.36133 11.5388 8.68249 10.6873 9.74467ZM9.35 9.25C10.1961 8.37992 10.6686 7.21362 10.6667 6C10.6667 3.42133 8.578 1.33333 6 1.33333C3.42133 1.33333 1.33333 3.42133 1.33333 6C1.33333 8.578 3.42133 10.6667 6 10.6667C7.21362 10.6686 8.37992 10.1961 9.25 9.35L9.35 9.25Z"
                  fill={searchIconColor}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <Country />
          </div>

          <div className="flex items-center gap-2">
            <img
              src={admin}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
            />
            <div className="hidden md:flex flex-col">
              <h3 className={`font-semibold text-sm md:text-base whitespace-nowrap ${nameColor}`}>
                Robert Patison
              </h3>
              <h6 className={`text-xs md:text-sm ${roleColor}`}>
                Super Admin
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

