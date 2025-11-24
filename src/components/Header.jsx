import React from 'react'
import Country from "./Country"
import admin from "../assets/flags/usa.png"

const Header = () => {
  return (
    <div className="bg-[#ffffff] flex items-center justify-between px-4">
      <div className="bg-[#ffffff] flex items-center">
        <h2>Acquisition Summary Overview:</h2>
        <div className="p-3">
          <div className="bg-[#F0F7FF] flex items-center px-2 py-2 rounded-lg">
            <input
              type="text"
              placeholder="Search Here"
              className=" outline-none text-white placeholder-gray-300 w-full"
            />
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6873 9.74467L13.5427 12.5993L12.5993 13.5427L9.74467 10.6873C8.68249 11.5388 7.36133 12.0019 6 12C2.688 12 0 9.312 0 6C0 2.688 2.688 0 6 0C9.312 0 12 2.688 12 6C12.0019 7.36133 11.5388 8.68249 10.6873 9.74467ZM9.35 9.25C10.1961 8.37992 10.6686 7.21362 10.6667 6C10.6667 3.42133 8.578 1.33333 6 1.33333C3.42133 1.33333 1.33333 3.42133 1.33333 6C1.33333 8.578 3.42133 10.6667 6 10.6667C7.21362 10.6686 8.37992 10.1961 9.25 9.35L9.35 9.25Z" fill="#007AFF"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
      <Country/>
      <div className="flex items-center gap-2">
        <img src={admin}
        className="w-10 h-10 rounded-full"/>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold whitespace-nowrap">Robert Patison</h3>
          <h6 className="text-sm text-gray-500">Super Admin</h6>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header