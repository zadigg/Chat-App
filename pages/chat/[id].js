import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Head from "next/head"


const Topbar = () => {
    return (
        <Flex></Flex>
    )
}

function Chat() {
  return (
    <Flex h="100vh">
      <Head>
        <title>Chat App</title>
      </Head>

      <Sidebar />

      <Flex flex={1} direction="column">
        <Topbar email={getOtherEmail(chat?.users, user)} />

        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="scroll"
          sx={{ scrollbarWidth: "none" }}
        >
          {getMessages()}
          <div ref={bottomOfChat}></div>
        </Flex>

        <Bottombar id={id} user={user} />
      </Flex>
    </Flex>
  );
}

export default Chat;
