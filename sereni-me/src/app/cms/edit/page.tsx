"use client";
import React from "react";
import SideBar from "../(components)/sidebar";

const UserPage: React.FC = () => {
  return (
    <>
      <div className="flex dark:text-gray-100">
        <div className="fixed">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default UserPage;
