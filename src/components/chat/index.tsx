import {
  useMemo, useState, useEffect, useCallback,
} from "react";
import { Conversation, Message } from "@twilio/conversations";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { uniqBy } from "lodash";
import {
  Box,
  Flex,
  Input,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import authAtom from "../../atoms/auth.atom";
import { connectionStateType } from "../../pages/calls/index";

type ParticipantTextType = {
  text: string;
  isLocal: boolean;
  dateCreated: Date;
}

type StyleType = {
  mr?: string;
  ml?: string;
  bgColor?: string;
  color?: string;
}

const ParticipantText = ({ text, isLocal, dateCreated }: ParticipantTextType) => {
  const styles = useMemo(() => {
    const style: StyleType = {};
    if (isLocal) {
      style.ml = "auto";
      style.bgColor = "primary.dark";
      style.color = "white";
    } else {
      style.mr = "auto";
      style.bgColor = "white";
      style.color = "primary.dark";
    }
    return style;
  }, [isLocal]);

  return (
    <Box my={1}>
      <Box
        width="70%"
        rounded="lg"
        p={2}
        {...styles}
      >
        {text}
        <Box><sub {...styles}>{dateCreated.toLocaleString()}</sub></Box>
      </Box>
    </Box>
  );
};

type PropType = {
  isOpen: boolean;
  onClose: () => void;
  conversation: Conversation
  connectionState: connectionStateType
}

export default function Chat({
  isOpen, onClose, conversation, connectionState,
}: PropType) {
  const [activeConversation, setActiveConversation] = useState<Conversation|null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const authState = useRecoilValue(authAtom);
  const { register, handleSubmit, reset } = useForm();

  // Handler for new message
  const messageAdded = (message:Message) => {
    setMessages((prevState) => uniqBy([...prevState, message], "sid"));
  };

  // Single conversation handler for fetching messages
  const handleConversation = useCallback(async () => {
    if (conversation && connectionState.status === "success") {
      const fetchedMessages = await conversation.getMessages();
      setActiveConversation(conversation);
      setMessages(fetchedMessages?.items || []);
      conversation.on("messageAdded", (m) => messageAdded(m));
    }
    // eslint-disable-next-line
  }, [conversation]);

  // Form submit handler
  const handleFormSubmit = (data:{message:string}) => {
    activeConversation?.sendMessage(String(data.message).trim());
    reset();
  };

  useEffect(() => {
    handleConversation();
  }, [conversation, handleConversation]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bgColor="gray.100">
        <DrawerCloseButton />
        <DrawerHeader>Chat</DrawerHeader>
        <DrawerBody>
          <Box
            h="100%"
            overflowY="scroll"
            p="2"
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {messages.map(({
              sid, author, body, dateCreated,
            }) => (
              <ParticipantText
                key={sid}
                text={body}
                isLocal={author.slice(0, 36) === authState?.user?.id}
                dateCreated={dateCreated}
              />
            ))}
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Flex wrap="nowrap" p={2}>
              <Input
                placeholder="Type a message..."
                flexGrow={1}
                mr={2}
                {...register("message", { required: true })}
              />
              <Button
                type="submit"
                colorScheme="purple"
              >
                Send
              </Button>
            </Flex>
          </form>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
