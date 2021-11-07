import { Box, Flex, IconButton } from "@chakra-ui/react";
import {
  IoPause, IoVideocam, IoVolumeHigh, IoSettingsSharp,
} from "react-icons/io5";
import { MdCallEnd } from "react-icons/md";

type PropTypes = {
  videoRef: React.RefObject<HTMLVideoElement>
  showOptions?: boolean
}

export default function Video({ videoRef, showOptions }: PropTypes) {
  const buttons = [
    {
      icon: IoPause,
      onClick: () => {},
      title: "Pause Video",
    },
    {
      icon: IoVideocam,
      onClick: () => {},
      title: "Start Video",
    },
    {
      icon: IoVolumeHigh,
      onClick: () => {},
      title: "Mute Video",
    },
    {
      icon: IoSettingsSharp,
      onClick: () => {},
      title: "Video Settings",
    },
    {
      icon: MdCallEnd,
      onClick: () => {},
      title: "End Call",
    },
  ];

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
          {
            buttons.map(
              ({ title, icon: Icon, onClick }) => (
                <IconButton
                  key={title}
                  icon={<Icon />}
                  onClick={onClick}
                  aria-label={title}
                  mx={2}
                />
              ),
            )
          }
        </Flex>
      )}
    </Box>
  );
}

Video.defaultProps = {
  showOptions: true,
};
