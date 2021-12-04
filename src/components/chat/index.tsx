import { useMemo, useState } from "react";
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

type ParticipantTextType = {
  text: string;
  isLocal: boolean;
}

type StyleType = {
  mr?: string;
  ml?: string;
  bgColor?: string;
  color?: string;
}

const ParticipantText = ({ text, isLocal }: ParticipantTextType) => {
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
    <Box
      width="70%"
      rounded="lg"
      p={2}
      my={1}
      {...styles}
    >
      {text}
    </Box>
  );
};

const dummyTexts = [
  {
    id: 1,
    text: "This is a text sent by the LOCAL participant",
    isLocal: true,
  },
  {
    id: 2,
    text: "This is a text sent by the REMOTE participant",
    isLocal: false,
  },
];

type PropType = {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chat({ isOpen, onClose }: PropType) {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState(dummyTexts);

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
            {texts.map(({ text: textContent, id, isLocal }) => (
              <ParticipantText
                key={id}
                text={textContent}
                isLocal={isLocal}
              />
            ))}
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <Flex wrap="nowrap" p={2}>
            <Input
              placeholder="Type a message..."
              flexGrow={1}
              value={text}
              mr={2}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              colorScheme="purple"
              onClick={() => setTexts(
                (prev) => [...prev, {
                  id: prev.length + 1,
                  text,
                  isLocal: true,
                }],
              )}
            >
              Send
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
