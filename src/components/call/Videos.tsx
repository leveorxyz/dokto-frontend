import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { Room as RoomType, RemoteParticipant } from "twilio-video";
import { uniqBy } from "lodash";

import Participant from "./Participant";
import LocalScreenSharingPreview from "./LocalScreenSharingPreview";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import ScreenShareButton from "./ScreenShareButton";

type PropTypes = {
  room: RoomType;
};

const Videos = ({ room }: PropTypes) => {
  const [participants, setParticipants] = useState<RemoteParticipant[]>(
    Array.from(room.participants.values()),
  );
  const [screenShareStream, setScreenShareStream] = useState<MediaStream|null>(null);

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
    <Flex direction="row" wrap="nowrap" w="100%" justifyContent={participants.length === 0 ? "space-between" : "flex-end"}>
      <Flex direction="column" flexGrow={1}>
        {/* Local screen share preview */}
        {screenShareStream && <LocalScreenSharingPreview stream={screenShareStream} />}
        {participants.length > 1
        && (
        <Grid
          height="100%"
          templateColumns="repeat(2, 1fr)"
          gap={6}
        >
          {participants.map(
            (p: RemoteParticipant) => (
              <Participant
                key={p.identity}
                participant={p}
              />
            ),
          )}

        </Grid>
        )}
        { participants.length === 1 && (
        <Box
          height="100%"
          as={Participant}
          participant={participants[0]}
        />
        )}
      </Flex>

      <Flex
        maxWidth="15rem"
        minH="85vh"
        flexGrow={0}
        flexShrink={1}
        direction="column"
      >
        <Box as="h3" fontSize="lg" fontWeight="600" width="100%" textAlign="center">
          Your video
        </Box>
        <Box
          as={Participant}
          participant={room.localParticipant}
          m={[3, 6, 6, 6, 6]}
          p={[3, 6, 6, 6, 6]}
        />

        <Flex mt={6}>
          <CameraButton room={room} />
          <MicButton room={room} />
          <ScreenShareButton room={room} setScreenShareStream={setScreenShareStream} />
          <LeaveRoomButton room={room} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Videos;
