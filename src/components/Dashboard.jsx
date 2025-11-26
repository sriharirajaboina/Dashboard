import React, { useState } from 'react';
import Sider from './Sider';
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project/Project";

const Dashboard = ({ darkMode, setDarkMode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden sm:block">
        <Sider darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform 
        ${openSidebar ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:hidden`}
      >
        <Sider mobile={true} darkMode={darkMode} setDarkMode={setDarkMode} closeSidebar={() => setOpenSidebar(false)} />
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header onMenuClick={() => setOpenSidebar(true)} darkMode={darkMode} />
        <div className="flex-1 overflow-y-auto">
          <Project darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Dashboard;


