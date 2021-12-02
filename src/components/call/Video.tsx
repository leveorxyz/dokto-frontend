import { Box } from "@chakra-ui/react";

type PropTypes = {
  videoRef: React.RefObject<HTMLVideoElement>
  videoStyle?: Record<string, string>
}

export default function Video({
  videoRef,
  videoStyle,
}: PropTypes) {
  return (
    <Box w="100%" h="100%" position="relative" rounded="lg">
      {/* these videos wouldn't have captions so it's safe to disable the caption tracks */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        autoPlay
        style={videoStyle}
      />
    </Box>
  );
}
Video.defaultProps = {
  videoStyle: {
    borderRadius: "15px",
    width: "100%",
    height: "100%",
  },
};
