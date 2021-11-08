import { Box, Flex } from "@chakra-ui/react";
import { VideoTrack, AudioTrack, Room } from "twilio-video";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";

type PropTypes = {
  videoRef: React.RefObject<HTMLVideoElement>
  showOptions?: boolean
  videoTracks: (VideoTrack|null)[]
  audioTracks: (AudioTrack|null)[]
  room: Room
}

export default function Video({
  videoRef, showOptions, videoTracks, audioTracks, room,
}: PropTypes) {
  return (
    <Box w="100%" h="100%" position="relative">
      {/* these videos wouldn't have captions so it's safe to disable the caption tracks */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={videoRef} autoPlay />

      {showOptions && (
        <Flex
          position="absolute"
          bottom="1rem"
          left="50%"
          transform="translateX(-50%)"
        >

          <CameraButton videoTracks={videoTracks} />
          <MicButton audioTracks={audioTracks} />
          <LeaveRoomButton room={room} />

        </Flex>
      )}
    </Box>
  );
}

Video.defaultProps = {
  showOptions: true,
};
