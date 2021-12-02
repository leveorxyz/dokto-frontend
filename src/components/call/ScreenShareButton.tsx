import { useState } from "react";
import { Room, LocalVideoTrack } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";

type PropTypes = {
  room: Room,
  setScreenShareStream: React.Dispatch<React.SetStateAction<MediaStream | null>>,
  isScreenSharingActive: boolean,
  setIsScreenSharingActive: React.Dispatch<React.SetStateAction<boolean>>,
}

const ScreenShareButton = ({
  room, setScreenShareStream, isScreenSharingActive, setIsScreenSharingActive,
}:PropTypes) => {
  const [screenShareTrack, setScreenShareTrack] = useState<LocalVideoTrack|null>(null);

  const handleScreenSharingEnabling = () => {
    // handle screen sharing
    if (!isScreenSharingActive) {
      navigator.mediaDevices
        .getDisplayMedia()
        .then((stream) => {
          setScreenShareStream(stream);
          setIsScreenSharingActive(true);

          // eslint-disable-next-line
          const screenTrack = new LocalVideoTrack(stream.getVideoTracks()[0], {
            logLevel: "error",
            name: "screen-share-track",
          });

          room.localParticipant.publishTrack(screenTrack);
          setScreenShareTrack(screenTrack);
          // event listener for chrome based web browsers popup
          // eslint-disable-next-line no-param-reassign
          stream.getVideoTracks()[0].onended = () => {
            room.localParticipant.unpublishTrack(screenTrack);
            setScreenShareTrack(null);
            setIsScreenSharingActive(false);
          };
        })
        .catch((err) => {
          console.error("cound not get an access to share screen", err);
        });
    } else {
      room.localParticipant.unpublishTrack(screenShareTrack as LocalVideoTrack);
      screenShareTrack?.stop();
      setScreenShareTrack(null);
      setIsScreenSharingActive(false);
    }
  };

  return (
    <IconButton
      icon={isScreenSharingActive ? <MdStopScreenShare /> : <MdScreenShare />}
      onClick={handleScreenSharingEnabling}
      aria-label="mute-unmute"
      title="Share screen"
      bgColor="rgba(0, 0, 0, 0.5)"
      _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
      mx={3}
      rounded="full"
    />
  );
};

export default ScreenShareButton;
