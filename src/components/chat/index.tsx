import { useMemo, useState } from "react";
import {
  Box, Flex, Input, Button,
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

export default function Chat() {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState(dummyTexts);

  return (
    <Box bgColor="gray.100">
      <Box overflowY="scroll" p="2">
        {texts.map(({ text: textContent, id, isLocal }) => (
          <ParticipantText
            key={id}
            text={textContent}
            isLocal={isLocal}
          />
        ))}
      </Box>

      <Flex wrap="nowrap" p={2} h="15rem">
        <Input
          placeholder="Type a message..."
          flexGrow={1}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
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
    </Box>
  );
}
