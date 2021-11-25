import { Box, Image } from "@chakra-ui/react";

import Banner from "../components/common/Banner";
import Description from "../components/how_it_works/Description";
import Process from "../components/how_it_works/Process";
import HowItWorksIMG from "../static/HowItWorks.png";
import DoktoIcon from "../static/DoktoIcon.png";

const HowItWorks = () => (
  <div>
    <Banner text="How It Works" imgSrc={HowItWorksIMG} />
    <Description />
    <Process />
    <Box
      as="button"
      bgColor="brand.darkPink"
      color="white"
      rounded="3xl"
      p={6}
      mb={24}
      mx="auto"
      textTransform="uppercase"
      _hover={{ opacity: ".9" }}
      _active={{ opacity: ".9" }}
      d="flex"
      flexDir="row"
      alignItems="center"
      flexWrap="nowrap"
    >
      <Box fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]} fontWeight={800}>See a Doctor Now</Box>
      <Image src={DoktoIcon} ml={12} height={["3rem", "3rem", "3rem", "6rem", "6rem"]} width="auto" fit="contain" />
    </Box>
  </div>
);

export default HowItWorks;
