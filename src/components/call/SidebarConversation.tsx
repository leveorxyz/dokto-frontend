import { useContext } from "react";
import {
  Flex, Box, Avatar, Button, IconButton,
} from "@chakra-ui/react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Conversation } from "@twilio/conversations";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";

// import UserActionModal from "./UserActionModal";

type ConversationComponentProps = {
  conversation: Conversation;
}

export default function SidebarConversation({ conversation }: ConversationComponentProps) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  // Remove patient from waiting room
  const handleRemoveParticipant = (channelUniqueName:string): void => {
    axios?.post("twilio/remove-participant-conversation/", { channel_unique_name: channelUniqueName })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

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
          onClick={() => handleRemoveParticipant(conversation.uniqueName)}
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
