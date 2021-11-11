import { useState } from "react";
import { Room, LocalVideoTrack } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";

type PropTypes = {
  room: Room,
  setScreenShareStream: React.Dispatch<React.SetStateAction<MediaStream | null>>
}

const ScreenShareButton = ({ room, setScreenShareStream }:PropTypes) => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
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
      screenShareTrack?.stop();
      room.localParticipant.unpublishTrack(screenShareTrack as LocalVideoTrack);
      setScreenShareTrack(null);
      setIsScreenSharingActive(false);
    }
  };

  return (
    <IconButton
      icon={isScreenSharingActive ? <MdStopScreenShare /> : <MdScreenShare />}
      onClick={handleScreenSharingEnabling}
      aria-label="mute-unmute"
      title="Mute/Unmute"
      colorScheme="purple"
      mx={2}
      rounded="full"
    />
  );
};

export default ScreenShareButton;
