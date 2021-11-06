import {
  Flex, Box,
} from "@chakra-ui/react";
import { IoPeopleCircle, IoTv } from "react-icons/io5";
import { useRecoilValue } from "recoil";

import { callListAtom, waitingListAtom } from "./atoms";
import SideBarUser from "./SideBarUser";
import { CustomHeading, EmptyComponent } from "./misc";

export default function SideBar() {
  const callListUsers = useRecoilValue(callListAtom);
  const waitingListUsers = useRecoilValue(waitingListAtom);

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
      <Flex
        width="100%"
        p={3}
        alignItems="center"
        justifyContent="flex-start"
        rounded="lg"
        _hover={{ bgColor: "brand.pink" }}
      >
        <Box as={IoTv} fontSize="1.2rem" mr={3} />
        <Box>Screen Share</Box>
      </Flex>
      <Box py={3} w="100%">
        <CustomHeading>In Call</CustomHeading>
        <Flex direction="column">
          {callListUsers.length === 0 && <EmptyComponent />}
          {callListUsers.map((user) => (
            <SideBarUser key={user.id} user={user} inCallList />
          ))}
        </Flex>
      </Box>

      <Box py={3} w="100%">
        <CustomHeading>Waiting List</CustomHeading>
        <Flex direction="column">
          {waitingListUsers.length === 0 && <EmptyComponent />}
          {waitingListUsers.map((user) => (
            <SideBarUser key={user.id} user={user} inCallList={false} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
