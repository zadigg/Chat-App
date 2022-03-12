import React from "react";
import Sidebar from "../../components/Sidebar";
import Head from "next/head";
import { Avatar, Flex } from "@chakra-ui/react";

const Topbar = () => {
  return (
    <Flex bg="gray.100" h="81px" w="100%" align="center">
      <Avatar />
    </Flex>
  );
};

function Chat() {
  return (
    <Flex h="100vh">
      <Head>
        <title>Chat App</title>
      </Head>

      <Sidebar />

      <Flex flex={1} direction="column">
        <Topbar />

        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="scroll"
          sx={{ scrollbarWidth: "none" }}
        >
          {/* <div ref={bottomOfChat}></div> */}
        </Flex>

        {/* <Bottombar id={id} user={user} /> */}
      </Flex>
    </Flex>
  );
}

export default Chat;
