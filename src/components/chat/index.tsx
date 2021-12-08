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
  Text,
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
import { ConnectionStateType } from "../../hooks/calls/useUpdateConnectionState";

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
  border?: string;
  borderRadius?: string | number;
}

const ParticipantText = ({ text, isLocal, dateCreated }: ParticipantTextType) => {
  const styles = useMemo(() => {
    const style: StyleType = {};
    if (isLocal) {
      style.ml = "auto";
      style.bgColor = "#BAFAF5";
      style.color = "primary.dark";
      style.border = "0px solid red";
      style.borderRadius = "30px 0px 30px 30px";
    } else {
      style.mr = "auto";
      style.bgColor = "gray.100";
      style.color = "primary.dark";
      style.border = "0px solid red";
      style.borderRadius = "0px 30px 30px 30px";
    }

    return style;
  }, [isLocal]);

  return (
    <Box my={2}>
      <Box
        width="70%"
        p={4}
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
  conversation: Conversation | null;
  connectionState: ConnectionStateType
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
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text textTransform="capitalize">{conversation?.friendlyName}</Text>
        </DrawerHeader>
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
          <Box as="form" onSubmit={handleSubmit(handleFormSubmit)} width="100%">
            <Flex wrap="nowrap" p={2} justifyContent="flex-start">
              <Input
                placeholder="Type a message..."
                flexGrow={1}
                mr={2}
                variant="filled"
                {...register("message", { required: true })}
              />
              <Button
                type="submit"
                colorScheme="purple"
              >
                Send
              </Button>
            </Flex>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
