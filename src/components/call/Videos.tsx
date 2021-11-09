import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { Room as RoomType, RemoteParticipant } from "twilio-video";
import { useRecoilState } from "recoil";
import { uniqBy } from "lodash";

import Participant from "./Participant";
import { participantsAtom } from "./atoms";

type PropTypes = {
  room: RoomType;
};

const Videos = ({ room }: PropTypes) => {
  const [remoteParticipants, setRemotePerticipants] = useState(Array.from(
    room.participants.values(),
  ));

  const [participants, setParticipants] = useRecoilState(participantsAtom);

  const addParticipantToStore = useCallback((participant: RemoteParticipant) => {
    if (participants.find((p: RemoteParticipant) => p.identity === participant.identity)) {
      return "";
    }
    const newParticipants = [...participants];
    newParticipants.push({ identity: participant.identity });
    setParticipants(uniqBy(newParticipants, "identity"));
    return "";
  }, [participants, setParticipants]);

  const removeParticipantFromStore = useCallback((participant:RemoteParticipant) => {
    const filteredParticipants = participants.filter(
      (p: RemoteParticipant) => p.identity !== participant.identity,
    );
    setParticipants(uniqBy(filteredParticipants, "identity"));
  }, [participants, setParticipants]);

  const addParticipant = useCallback((participant: RemoteParticipant) => {
    addParticipantToStore(participant);
    setRemotePerticipants((prev) => uniqBy([...prev, participant], "identity"));
  }, [addParticipantToStore]);

  const removeParticipant = useCallback((participant: RemoteParticipant) => {
    removeParticipantFromStore(participant);
    setRemotePerticipants(
      (prev) => prev.filter((p: RemoteParticipant) => p.identity !== participant.identity),
    );
  }, [removeParticipantFromStore]);

  useEffect(() => {
    remoteParticipants.forEach((participant) => {
      addParticipant(participant);
    });

    room.on("participantConnected", (participant: RemoteParticipant) => addParticipant(participant));

    room.on("participantDisconnected", (participant: RemoteParticipant) => {
      removeParticipant(participant);
    });
  }, [addParticipant, remoteParticipants, removeParticipant, room]);

  return (
    <Flex direction="row" wrap="nowrap" w="100%">
      <Grid
        flexGrow={1}
        height="100%"
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        {remoteParticipants.map(
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
