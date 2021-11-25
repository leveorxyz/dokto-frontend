import {
  Flex, Box,
} from "@chakra-ui/react";
import { IoPeopleCircle } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { Conversation } from "@twilio/conversations";
import { callListAtom } from "./atoms";
import SideBarUser from "./SideBarUser";
import SidebarConversation from "./SidebarConversation";
import { CustomHeading, EmptyComponent } from "./misc";

type PropTypes = {
  conversations: Conversation[];
};

export default function SideBar({ conversations }: PropTypes) {
  const callListUsers = useRecoilValue(callListAtom);

  // const waitingListUsers = useRecoilValue(waitingListAtom);

  return (
    <Flex
      direction="column"
      bg="brand.dark"
      minHeight="100%"
      minWidth="15rem"
      overflowY="scroll"
      py={6}
      px={4}
      alignItems="center"
      color="white"
    >
      <CustomHeading>Actions</CustomHeading>
      <Flex
        width="100%"
        p={3}
        alignItems="center"
        justifyContent="flex-start"
        rounded="lg"
        _hover={{ bgColor: "brand.pink" }}
      >
        <Box as={IoPeopleCircle} fontSize="1.2rem" mr={3} />
        <Box>Group Call</Box>
      </Flex>
      {/* <Flex
        width="100%"
        p={3}
        alignItems="center"
        justifyContent="flex-start"
        rounded="lg"
        _hover={{ bgColor: "brand.pink" }}
      >
        <Box as={IoTv} fontSize="1.2rem" mr={3} />
        <Box>Screen Share</Box>
      </Flex> */}
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
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
