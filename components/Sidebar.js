import React from "react";
import { LogoutIcon, UserCircleIcon } from "@heroicons/react/outline";

const Chat = () => {
  return (
    <div className="px-3 py-4 flex space-x-2 items-center">
      <div>
        <UserCircleIcon className="w-5 h-5 " />
      </div>
      <div className="text-xs md:text-md lg:text-lg overflow-hidden">
        planck6260@gmail.com
      </div>
    </div>
  );
};
function Sidebar() {
  return (
    <>
      <div className=" flex w-full  ">
        <div className="w-[40%] text-xs md:w-[25%] md:text-base xl:w-[25%] 2xl:w-[20%]  lg:text-base  flex flex-col break-words border-l border border-gray-200 ">
          <div className="flex justify-between items-center  space-x-3 border-b-2 border-gray-200 break-words">
            <div className="px-3 py-4 flex items-center ml-5 ">
              <div>
                <UserCircleIcon className="w-5 h-5  " />
              </div>
              <div className="hidden md:inline text-md">Albert Einstein</div>
            </div>
            <div className="flex justify-end">
              <LogoutIcon className="w-5 h-5 mr-4" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-center mt-4 w-full">
              <button className="text-xs px-3 py-1 sm:text-sm sm:px-4 md:text-md md:px-10 lg:text-lg lg:px-10 bg-gray-200 rounded-lg font-bold">
                New Chat
              </button>
            </div>

            {/*  */}
            <div className="flex flex-col overflow-y-auto h-[100vh] ml-4 scrollbar-hide ">
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="w-[75%] xl:w-[75%] 2xl:w-[80%]  ">
          <div className="px-3 py-4 bg-gray-200 ">
            <h2 className="font-bold">planck6260@gmail.com</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
