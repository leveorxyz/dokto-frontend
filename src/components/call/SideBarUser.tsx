import {
  Flex, Box, Avatar, Button, IconButton, useDisclosure,
} from "@chakra-ui/react";
import { IoEllipsisVertical } from "react-icons/io5";

import { UserDataType } from "./atoms";
import UserActionModal from "./UserActionModal";

type UserComponentProps = {
  user: UserDataType;
  inCallList: boolean;
}

export default function UserComponent({ user, inCallList }: UserComponentProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Avatar name={user.name} />
      <Flex direction="column" mx={3}>
        <Box color="white" mx={3}>{user.name}</Box>
        {!inCallList && (
        <Button
          id="call-button"
          bg="brand.pink"
          size="xs"
          _hover={{ bg: "brand.darkPink", color: "white" }}
          onClick={onOpen}
        >
          Start Call
        </Button>
        )}
      </Flex>
      <IconButton
        aria-label={`User actions for ${user.name}`}
        icon={<Box as={IoEllipsisVertical} color="brand.light" />}
        variant="ghost"
        _hover={{ bg: "brand.light" }}
        _active={{ bg: "brand.pink" }}
      />
      <UserActionModal user={user} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
