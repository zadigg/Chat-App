import React from "react";
import Sidebar from "../../components/Sidebar";

const Topbar = () => {
  return (
    <div className="px-3 py-4 bg-gray-200 wfull ">
      <h2 className="font-bold">planck6260@gmail.com</h2>
    </div>
  );
};

function Chat() {
  return (
    <>
      <div className="h-[100vh] flex">
        <Sidebar />
      </div>
    </>
  );
}

export default Chat;
