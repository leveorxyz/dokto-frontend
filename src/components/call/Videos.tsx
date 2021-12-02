import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { Room as RoomType, RemoteParticipant } from "twilio-video";
import { useSetRecoilState } from "recoil";
import { uniqBy } from "lodash";

import { callListAtom } from "./atoms";
import Participant from "./Participant";
import LocalScreenSharingPreview from "./LocalScreenSharingPreview";
import ActionButtons from "./ActionButtons";

type PropTypes = {
  room: RoomType;
};

const Videos = ({ room }: PropTypes) => {
  const setInCallList = useSetRecoilState(callListAtom);
  const [participants, setParticipants] = useState<RemoteParticipant[]>(
    Array.from(room.participants.values()),
  );
  const [screenShareStream, setScreenShareStream] = useState<MediaStream|null>(null);
  const [isScreenSharingActive, setIsScreenSharingActive] = useState<boolean>(false);

  const addParticipant = useCallback((participant: RemoteParticipant) => {
    setParticipants((prev) => (uniqBy([...prev, participant], "identity")));
  }, [setParticipants]);

  const removeParticipant = useCallback((participant: RemoteParticipant) => {
    setParticipants(
      (prev) => prev.filter((p: RemoteParticipant) => p.identity !== participant.identity),
    );
  }, [setParticipants]);

  useEffect(() => {
    setInCallList(participants);
  }, [participants, setInCallList]);

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
    <Flex direction="row" wrap="nowrap" w="100%" justifyContent="stretch" paddingTop="10" paddingRight="3">
      <Flex direction="column" flexGrow={1}>
        {/* Local screen share preview show only when screen share state is active */}
        {isScreenSharingActive
         && screenShareStream
         && <LocalScreenSharingPreview stream={screenShareStream} />}

        {/* Show grid when there's more than one participant */}
        {participants.length > 1
        && (
        <Flex
          height="100%"
          direction="row"
          justifyContent="center"
          wrap="wrap"
        >
          {participants.map(
            (p: RemoteParticipant) => (
              <Box
                key={p.identity}
                m={3}
                width={participants.length === 2 ? "50%" : "33.33%"}
                position="relative"
              >
                <Participant participant={p} />
              </Box>
            ),
          )}

        </Flex>
        )}
        { participants.length === 1 && (
        <Box
          height="100%"
          as={Participant}
          participant={participants[0]}
        />
        )}
      </Flex>

      <Box
        position="fixed"
        width="200px"
        bottom="2rem"
        right="2rem"
      >

        <Participant
          participant={room.localParticipant}
          videoStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            border: "2px solid white",
          }}
        />

        {/* Video action buttons */}
        <ActionButtons
          room={room}
          setScreenShareStream={setScreenShareStream}
          isScreenSharingActive={isScreenSharingActive}
          setIsScreenSharingActive={setIsScreenSharingActive}
        />
      </Box>
    </Flex>
  );
};

export default Videos;
