import { Box, Image } from "@chakra-ui/react";

import AvailableCareHeader from "../components/available_care/AvailableCareHeader";
import CareList from "../components/available_care/CareList";
import QualityCare from "../components/available_care/QualityCare";
import AvailableCareCarousel from "../components/available_care/AvailableCareCarousel";
import DoktoIconIMG from "../static/DoktoIcon.png";
import dotsSVG from "../static/dots.svg";

const Blobs = () => (
  <>
    <Box
      position="absolute"
      top={0}
      right={0}
      transform={["translateX(90%)", "translateX(90%)", "translateX(80%)", "translateX(60%)", "translateX(60%)"]}
      h="75vh"
      w="75vh"
      bg="primary.light"
      zIndex={-1}
      rounded="full"
    />
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top={24}
      right={0}
      transform={["translateX(-10%)", "translateX(-10%)", "translateX(-20%)", "translateX(-50%)", "translateX(-50%)"]}
      h={["20vh", "20vh", "30vh", "40vh", "40vh"]}
      w={["20vh", "20vh", "30vh", "40vh", "40vh"]}
      bg="brand.darkPink"
      zIndex={-2}
      rounded="full"
    >
      <Image position="absolute" h="80%" src={DoktoIconIMG} alt="Dokto Icon" fit="contain" />
    </Box>
    <Box
      position="absolute"
      top={72}
      left={0}
      transform="translate(-92%, 0)"
      h="120vh"
      w="120vh"
      bg="brand.darkPink"
      zIndex={-2}
      rounded="full"
    />
  </>
);

const AvailableCare = () => (
  <Box overflow="hidden" position="relative">
    <Image
      src={dotsSVG}
      position="absolute"
      zIndex={-1}
      top={[12, 12, 12, 20, 20]}
      left={0}
    />
    <Blobs />
    <AvailableCareHeader />
    <CareList />
    <AvailableCareCarousel />
    <QualityCare />
  </Box>
);

export default AvailableCare;
