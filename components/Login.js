import React from "react";
import { ChatAltIcon } from "@heroicons/react/outline";
import Head from "next/head";
function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div classNameName="flex justify-center items-center h-screen">
        <div classNameName="bg-[#495567] h-[35%] w-[40%] md:w-[20%] space-y-5 rounded-xl">
          <div classNameName="flex justify-center bg-gradient-to-r from-[#86269F] to-[#DA0B8C]  w-[35%] h-[30%] mx-auto mt-14 rounded-lg shadow-lg">
            <ChatAltIcon classNameName="flex items-center text-white  w-[120px]" />
          </div>
          <div classNameName="flex justify-center ">
            <button classNameName="bg-[#EDF1F6] px-2 py-1 rounded-md shadow-lg mt-5 font-bold font-sans">
              SignIn with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
