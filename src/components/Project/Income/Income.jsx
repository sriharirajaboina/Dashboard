import React from 'react'
import IncomeGraph from './IncomeGraph'
import SummaryAll from './SummaryAll'

const Income = () => {
  return (
    <div className="grid grid-cols-4 ">
        <div className="col-span-3 bg-[#ffffff] p-4 my-5 rounded-lg">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold text-[#222]">Income & Expense</h3>

            <select
              className="bg-[#F0F7FF] border border-[#ffffff] rounded-full px-4 py-2 text-sm focus:outline-none"
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
            <IncomeGraph/>
        </div>
        <div className="col-span-1">
            <SummaryAll/>
        </div>
        
    </div>
  )
}

export default Income