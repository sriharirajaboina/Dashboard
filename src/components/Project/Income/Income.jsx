import React from 'react'
import IncomeGraph from './IncomeGraph'
import SummaryAll from './SummaryAll'

const Income = ({ darkMode = false }) => {
  const bgClass = darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black';
  const selectBg = darkMode ? 'bg-gray-700 text-white' : 'bg-[#F0F7FF] text-black';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

      {/* Income Graph */}
      <div className={`lg:col-span-3 p-4 my-5 rounded-lg ${bgClass}`}>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-semibold">{`Income & Expense`}</h3>

          <select
            className={`border border-transparent rounded-full px-4 py-2 text-sm focus:outline-none ${selectBg}`}
          >
            <option value="Yearly">Yearly</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        {/* Income Graph Component */}
        <IncomeGraph darkMode={darkMode} />
      </div>

      {/* Summary All */}
      <div className={`lg:col-span-1 p-4 my-5 rounded-lg ${bgClass}`}>
        <SummaryAll darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Income

