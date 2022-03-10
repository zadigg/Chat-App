import React from "react";
import { LogoutIcon } from "@heroicons/react/outline";

function Sidebar() {
  return (
    <>
      <div className=" flex w-full h-screen ">
        <div className="w-[20%]   flex flex-col break-words border-l border border-gray-200 ">
          <div className="flex justify-between items-center  space-x-3 border-b-2 border-gray-200 break-words">
            <div className="px-3 py-4 ">
              Albert <span className="hidden md:inline-block">Einstein</span>
            </div>
            <div>
              <LogoutIcon className="w-5 h-5 " />
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex justify-center mt-4 w-full">
              <button className="text-xs px-3 py-1 sm:text-sm sm:px-4 md:text-md md:px-10 lg:text-lg lg:px-10 bg-gray-200 rounded-lg font-bold">
                New Chat
              </button>
            </div>

            <div className="px-3 py-4">
              <div className="hidden lg:inline-block">planck6260@gmail.com</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-[80%]">
          <div className="px-3 py-4 bg-gray-200 ">
            <h2 className="font-bold">planck6260@gmail.com</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
