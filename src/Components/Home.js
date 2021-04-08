import React, { useState } from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Section from "./Section";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container2">
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Section sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    </div>
  );
};

export default Home;
