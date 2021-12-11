import { useContext, Dispatch } from "react";
import {
  Flex,
  Box,
  Avatar,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Conversation } from "@twilio/conversations";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";

type ConversationComponentProps = {
  conversation: Conversation;
  setCurrentConversationRoom: Dispatch<Conversation | null>;
  openChatWindow: () => void;
}

export default function SidebarConversation(
  {
    conversation,
    setCurrentConversationRoom,
    openChatWindow,
  }: ConversationComponentProps,
) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  // Remove patient from waiting room
  const handleRemoveParticipant = (channelUniqueName:string): void => {
    axios?.post("twilio/remove-participant-conversation/", { channel_unique_name: channelUniqueName })
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
        <Box color="white" mx={3} textTransform="capitalize">{conversation.friendlyName}</Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Button
            id="call-button"
            bg="brand.pink"
            size="xs"
            _hover={{ bg: "brand.darkPink", color: "white" }}
            onClick={() => handleRemoveParticipant(conversation.uniqueName)}
          >
            Start Call
          </Button>
          <Button
            id="call-button"
            bg="brand.pink"
            size="xs"
            _hover={{ bg: "brand.darkPink", color: "white" }}
            onClick={() => {
              setCurrentConversationRoom(conversation);
              openChatWindow();
            }}
          >
            Chat
          </Button>
        </Flex>
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
