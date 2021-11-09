import { Grid, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import _ from "lodash";
import Participant from "./Participant";
import { participantsAtom } from "./atoms";

type PropTypes = {
  room: any;
};

const Videos = ({ room }: PropTypes) => {
  const [remoteParticipants, setRemotePerticipants] = useState(Array.from(
    room.participants.values(),
  ));

  const [participants, setParticipants] = useRecoilState(participantsAtom);

  const addParticipantToStore = (participant: any) => {
    if (participants.find((p:any) => p.identity === participant.identity)) {
      return "";
    }
    const newParticipants = [...participants];
    newParticipants.push({ identity: participant.identity });
    setParticipants(_.uniqBy(newParticipants, "identity"));
    return "";
  };

  const removeParticipantFromStore = (participant:any) => {
    const filteredParticipants = participants.filter(
      (p:any) => p.identity !== participant.identity,
    );
    setParticipants(_.uniqBy(filteredParticipants, "identity"));
  };

  const addParticipant = (participant:any) => {
    addParticipantToStore(participant);
    setRemotePerticipants((prev) => _.uniqBy([...prev, participant], "identity"));
  };

  const removeParticipant = (participant:any) => {
    removeParticipantFromStore(participant);
    setRemotePerticipants((prev) => prev.filter((p:any) => p.identity !== participant.identity));
  };

  useEffect(() => {
    remoteParticipants.forEach((participant) => {
      addParticipant(participant);
    });

    room.on("participantConnected", (participant:any) => addParticipant(participant));

    room.on("participantDisconnected", (participant:any) => {
      removeParticipant(participant);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Box position="relative" w="100%">
      <Grid
        height="100%"
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        {remoteParticipants.map(
          (p:any) => <Participant key={p.identity} participant={p} room={room} />,
        )}
      </Grid>
      <Box
        as={Participant}
        participant={room.localParticipant}
        room={room}
        isLocal
        position="absolute"
        top="1rem"
        right="1rem"
        width="15rem"
        height="max-content"
      />
    </Box>
  );
};

export default Videos;
