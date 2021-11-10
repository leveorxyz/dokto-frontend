import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect, useCallback } from "react";
import { Room as RoomType, RemoteParticipant } from "twilio-video";
import { useRecoilState } from "recoil";
import { uniqBy } from "lodash";

import Participant from "./Participant";
import { callListAtom } from "./atoms";

type PropTypes = {
  room: RoomType;
};

const Videos = ({ room }: PropTypes) => {
  const [participants, setParticipants] = useRecoilState(callListAtom);

  const addParticipant = useCallback((participant: RemoteParticipant) => {
    setParticipants((prev) => (uniqBy([...prev, participant], "identity")));
  }, [setParticipants]);

  const removeParticipant = useCallback((participant: RemoteParticipant) => {
    setParticipants(
      (prev) => prev.filter((p: RemoteParticipant) => p.identity !== participant.identity),
    );
  }, [setParticipants]);

  useEffect(() => {
    room.on("participantConnected", (participant: RemoteParticipant) => addParticipant(participant));

    room.on("participantDisconnected", (participant: RemoteParticipant) => {
      removeParticipant(participant);
    });

    const unscubscribe = () => {
      room.removeAllListeners();
    };

    return unscubscribe;
  }, [addParticipant, participants, removeParticipant, room]);

  return (
    <Flex direction="row" wrap="nowrap" w="100%">
      {participants.length > 1
      && (
      <Grid
        flexGrow={1}
        height="100%"
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        {participants.map(
          (p: RemoteParticipant) => (
            <Participant
              key={p.identity}
              participant={p}
              room={room}
            />
          ),
        )}
      </Grid>
      )}
      { participants.length === 1 && (
      <Box
        flexGrow={1}
        height="100%"
        as={Participant}
        key={participants[0].identity}
        participant={participants[0]}
        room={room}
      />
      )}

      <Flex
        flexGrow={0}
        flexShrink={1}
        direction="column"
      >
        <Box as="h3" fontSize="lg" fontWeight="600">
          Your video
        </Box>
        <Box
          as={Participant}
          participant={room.localParticipant}
          room={room}
          isLocal
          m={[3, 6, 6, 6, 6]}
          p={[3, 6, 6, 6, 6]}
          maxWidth="15rem"
          height="max-content"
        />
      </Flex>
    </Flex>
  );
};

export default Videos;
