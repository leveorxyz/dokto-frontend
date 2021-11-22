import { useState, useEffect, useCallback } from "react";
import {
  Flex, Box,
} from "@chakra-ui/react";
import { IoPeopleCircle } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { Room as RoomType, RemoteParticipant } from "twilio-video";
import { uniqBy } from "lodash";
import { callListAtom } from "./atoms";
import SideBarUser from "./SideBarUser";
import { CustomHeading, EmptyComponent } from "./misc";

type PropTypes = {
  waitingRoom: RoomType;
};

export default function SideBar({ waitingRoom }: PropTypes) {
  const callListUsers = useRecoilValue(callListAtom);
  const [waitingListUsers, setWaitingListUsers] = useState<RemoteParticipant[]>(
    Array.from(waitingRoom?.participants?.values()),
  );
  // const waitingListUsers = useRecoilValue(waitingListAtom);

  const addParticipant = useCallback((participant: RemoteParticipant) => {
    setWaitingListUsers((prev) => (uniqBy([...prev, participant], "identity")));
  }, [setWaitingListUsers]);

  const removeParticipant = useCallback((participant: RemoteParticipant) => {
    setWaitingListUsers(
      (prev) => prev.filter((p: RemoteParticipant) => p.identity !== participant.identity),
    );
  }, [setWaitingListUsers]);

  useEffect(() => {
    waitingRoom.on("participantConnected", (participant: RemoteParticipant) => addParticipant(participant));

    waitingRoom.on("participantDisconnected", (participant: RemoteParticipant) => {
      removeParticipant(participant);
    });

    const unscubscribe = () => {
      waitingRoom.removeAllListeners();
    };

    return unscubscribe;
  }, [addParticipant, removeParticipant, waitingRoom]);

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
            <SideBarUser key={user.identity} user={user} inCallList />
          ))}
        </Flex>
      </Box>

      <Box py={3} w="100%">
        <CustomHeading>Waiting Room</CustomHeading>
        <Flex direction="column">
          {waitingListUsers.length === 0 && <EmptyComponent />}
          {waitingListUsers.map((user) => (
            <SideBarUser key={user.identity} user={user} inCallList={false} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
