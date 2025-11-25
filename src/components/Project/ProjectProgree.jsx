import React from 'react'
import complete from "../../assets/project/complete.png"
import pending from "../../assets/project/pending.png"
import income from "../../assets/project/income.png"
import pendingIncome from "../../assets/project/pending-income.png"
import ProjectSummary from "../Project/ProjectSummary/ProjectSummary"
import Income from './Income/Income'


const ProjectProgree = () => {
  return (
    <div className="mx-5">
        <div className="py-5 flex items-center justify-between">
            <div className="bg-[#ffffff] px-4 py-4 flex items-center justify-between gap-8 rounded-lg">
                <div className="flex items-center">
                    <div className="bg-[#F0F7FF] w-10 h-10 rounded-full flex items-center justify-center">
                        <img src={complete}
                        className="w-8 h-8"/>
                    </div>
                    <div className="text-base ml-3">
                        <h3 className="font-extrabold">24</h3>
                        <h4 className="text-sm font-semibold text-[#666666]">Completed Project</h4>
                    </div>
                </div>
                <div className="text-green-400 flex flex-col items-center">
                    <h4 className="text-sm">&#8599;</h4>
                    <h4 className="font-bold">1.3%</h4>
                </div>
            </div>
            <div className="bg-[#ffffff] px-4 py-4 flex items-center justify-between gap-8 rounded-lg">
                <div className="flex items-center">
                    <div className="bg-[#F0F7FF] w-10 h-10 rounded-full flex items-center justify-center">
                        <img src={pending}
                        className="w-8 h-8"/>
                    </div>
                    <div className="text-base ml-3">
                        <h3 className="font-extrabold">07</h3>
                        <h4 className="text-sm font-semibold text-[#666666]">Pending Project</h4>
                    </div>
                </div>
                <div className="text-green-400 flex flex-col items-center">
                    <h4 className="text-sm">&#8599;</h4>
                    <h4 className="font-bold">1.3%</h4>
                </div>
            </div>
            <div className="bg-[#ffffff] px-4 py-4 flex items-center justify-between gap-8 rounded-lg">
                <div className="flex items-center">
                    <div className="bg-[#F0F7FF] w-10 h-10 rounded-full flex items-center justify-center">
                        <img src={income}
                        className="w-8 h-8"/>
                    </div>
                    <div className="text-base ml-3">
                        <h3 className="font-extrabold">$12000</h3>
                        <h4 className="text-sm font-semibold text-[#666666]">Total Income</h4>
                    </div>
                </div>
                <div className="text-green-400 flex flex-col items-center">
                    <h4 className="text-sm">&#8599;</h4>
                    <h4 className="font-bold">1.3%</h4>
                </div>
            </div>    
            <div className="bg-[#ffffff] px-4 py-4 flex items-center justify-between gap-10 rounded-lg">
                <div className='flex items-center'>
                    <div className="bg-[#F0F7FF] w-10 h-10 rounded-full flex items-center justify-center">
                        <img src={pendingIncome}
                        className="w-8 h-8"/>
                    </div>
                    <div className="text-base ml-3">
                        <h3 className="font-extrabold">$12000</h3>
                        <h4 className="text-sm font-semibold text-[#666666]">Pending</h4>
                    </div>
                </div>
                <div className="text-green-400 flex flex-col items-center">
                    <h4 className="text-sm">&#8599;</h4>
                    <h4 className="font-bold">1.3%</h4>
                </div>
            </div> 
        </div>
        <ProjectSummary />
       <Income/>
    </div>
  )
}

export default ProjectProgree