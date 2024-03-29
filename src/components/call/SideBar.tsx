import { Dispatch } from "react";
import {
  Flex, Box,
} from "@chakra-ui/react";
// import { IoPeopleCircle } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { Conversation } from "@twilio/conversations";
import { callListAtom } from "./atoms";
import SideBarUser from "./SideBarUser";
import SidebarConversation from "./SidebarConversation";
import { CustomHeading, EmptyComponent } from "./misc";

type PropTypes = {
  conversations: Conversation[];
  setCurrentConversationRoom: Dispatch<Conversation | null>;
  openChatWindow: () => void;
};

export default function SideBar({
  conversations,
  setCurrentConversationRoom,
  openChatWindow,
}: PropTypes) {
  const callListUsers = useRecoilValue(callListAtom);

  // const waitingListUsers = useRecoilValue(waitingListAtom);

  return (
    <Flex
      direction="column"
      bg="brand.dark"
      minHeight="100vh"
      minWidth="15rem"
      overflowY="scroll"
      py={6}
      px={4}
      alignItems="center"
      color="white"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box py={3} w="100%">
        <CustomHeading>In Call</CustomHeading>
        <Flex direction="column">
          {callListUsers.length === 0 && <EmptyComponent />}
          {callListUsers.map((user) => (
            <SideBarUser key={user.identity} user={user} />
          ))}
        </Flex>
      </Box>

      <Box py={3} w="100%">
        <CustomHeading>Waiting Room</CustomHeading>
        <Flex direction="column">
          {conversations.length === 0 && <EmptyComponent />}
          {conversations.map((conversation) => (
            <SidebarConversation
              key={conversation.sid}
              conversation={conversation}
              setCurrentConversationRoom={setCurrentConversationRoom}
              openChatWindow={openChatWindow}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
