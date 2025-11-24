import React,{useState} from 'react'

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
   <div className="p-3">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="flex items-center gap-3 text-white"
  >
    <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>

    {/* Switch UI */}
    <div className="bg-[#093373]">
        <div
      className={`w-10 h-5 rounded-full flex items-center px-1 transition-all ${
        darkMode ? "bg-yellow-400" : "bg-gray-400"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transition-all ${
          darkMode ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </div>
    </div>
    
  </button>
</div>

  )
}

export default Toggle