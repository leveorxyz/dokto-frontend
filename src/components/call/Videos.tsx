import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { Room as RoomType, RemoteParticipant } from "twilio-video";
import { useRecoilState } from "recoil";
import { uniqBy } from "lodash";

import Participant from "./Participant";
import { callListAtom } from "./atoms";
import LocalScreenSharingPreview from "./LocalScreenSharingPreview";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import ScreenShareButton from "./ScreenShareButton";

type PropTypes = {
  room: RoomType;
};

const Videos = ({ room }: PropTypes) => {
  const [participants, setParticipants] = useRecoilState(callListAtom);
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
      />
      )}

      {/* Local screen share preview */}
      {screenShareStream && <LocalScreenSharingPreview stream={screenShareStream} />}

      <Flex
        maxWidth="15rem"
        height="max-content"
        flexGrow={0}
        flexShrink={1}
        direction="column"
        position="relative"
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

        <Flex
          position="absolute"
          bottom="1rem"
          left="50%"
          transform="translateX(-50%)"
        >
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
