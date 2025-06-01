import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Navigation />
      <main className="flex-grow max-w-5xl mx-auto p-4 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
