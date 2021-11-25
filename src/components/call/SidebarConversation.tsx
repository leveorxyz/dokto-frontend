import {
  Flex, Box, Avatar, Button, IconButton,
} from "@chakra-ui/react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Conversation } from "@twilio/conversations";

// import UserActionModal from "./UserActionModal";

type ConversationComponentProps = {
  conversation: Conversation;

}

export default function SidebarConversation({ conversation }: ConversationComponentProps) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      wrap="nowrap"
      alignItems="center"
      cursor="pointer"
      my={3}
      sx={{
        "#call-button": {
          display: "none",
        },
        _hover: {
          "#call-button": {
            display: "flex",
          },
        },
      }}
    >
      <Avatar name={conversation.friendlyName} />
      <Flex direction="column" mx={3}>
        <Box color="white" mx={3}>{conversation.friendlyName}</Box>

        <Button
          id="call-button"
          bg="brand.pink"
          size="xs"
          _hover={{ bg: "brand.darkPink", color: "white" }}
        >
          Start Call
        </Button>

      </Flex>
      <IconButton
        aria-label={`User actions for ${conversation.friendlyName}`}
        icon={<Box as={IoEllipsisVertical} color="brand.light" />}
        variant="ghost"
        _hover={{ bg: "brand.light" }}
        _active={{ bg: "brand.pink" }}
      />
      {/* <UserActionModal user={user} isOpen={isOpen} onClose={onClose} /> */}
    </Flex>
  );
}
