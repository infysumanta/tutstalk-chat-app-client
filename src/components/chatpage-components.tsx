"use client";
import { ChatState } from "@/provider/chat-peovider";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import SideDrawer from "./chats/side-drawer";

type Props = {};

function ChatPageComponents({}: Props) {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      {/* <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box> */}
    </div>
  );
}

export default ChatPageComponents;
