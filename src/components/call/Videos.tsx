import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect, useCallback } from "react";
import { Room as RoomType, RemoteParticipant } from "twilio-video";
import { useRecoilState } from "recoil";
import { uniqBy } from "lodash";

import Participant from "./Participant";
import { participantsAtom } from "./atoms";

type PropTypes = {
  room: RoomType;
};

const Videos = ({ room }: PropTypes) => {
  const [participants, setParticipants] = useRecoilState(participantsAtom);

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
  }, [addParticipant, participants, removeParticipant, room]);

  return (
    <Flex direction="row" wrap="nowrap" w="100%">
      <Grid
        flexGrow={1}
        height="100%"
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        {participants.map(
          (p: RemoteParticipant) => <Participant key={p.identity} participant={p} room={room} />,
        )}
      </Grid>
      <Box
        as={Participant}
        participant={room.localParticipant}
        room={room}
        isLocal
        maxWidth="15rem"
        height="max-content"
      />
    </Flex>
  );
};

export default Videos;
