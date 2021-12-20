import { Box } from "@chakra-ui/react";

type PropTypes = {
  videoSrc: string,
};
const BackgroundVideo = ({ videoSrc }: PropTypes) => (
  <Box
    as="video"
    minWidth="100%"
    minHeight="100%"
    paddingLeft="120px"
    position="fixed"
    objectFit="cover"
    src={videoSrc}
    autoPlay
    loop
    muted
  />
);

export default BackgroundVideo;
