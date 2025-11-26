import React, { useState } from "react";
import usa from "../assets/flags/usa.png";
import uk from "../assets/flags/uk.png";
import india from "../assets/flags/india.png";
import canada from "../assets/flags/canada.png";

const countries = [
  { code: "USA", label: "English (US)", short: "EN", flag: usa },
  { code: "UK", label: "English (UK)", short: "EN", flag: uk },
  { code: "India", label: "Hindi", short: "HI", flag: india },
  { code: "Canada", label: "English (CA)", short: "EN", flag: canada },
];

const CountryLanguageSelect = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);

  return (
    <div className="relative min-w-[200px]">
      <div
        className="flex items-center justify-between bg-[#ffffff] text-white p-2 rounded-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <img src={selected.flag} className="w-6 h-6 rounded-full" />

          <div className="flex gap-3  leading-tight">
            <span className="px-2 font-bold text-gray-500 border-r-3 border-gray-500">{selected.label}</span>
            <span className="text-base font-bold text-gray-300">{selected.code}</span>
          </div>
        </div>

        <span className="text-black ml-5">▼</span>
      </div>
      {open && (
        <div className="absolute w-full bg-[#ffffff] text-white mt-2 rounded-md shadow-lg z-10">
          {countries.map((item) => (
            <div
              key={item.code}
              className="flex items-center text-gray-500 gap-3 p-2 hover:bg-[#0C4A8A] cursor-pointer rounded-md"
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
            >
              <img src={item.flag} className="w-6 h-6 rounded-full" />

              <div className="flex flex-col leading-tight">
                <span className="font-medium">{item.label}</span>
                <span className="text-xs text-gray-300">{item.code}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryLanguageSelect;

