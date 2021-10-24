import React from "react";
import {
  Box, Heading, Link, Image,
} from "@chakra-ui/react";

import AppStoreIMG from "../../static/AppStore.png";
import PlayStoreIMG from "../../static/PlayStore.png";
import BluePhonesIMG from "../../static/BluePhones.png";
import { SpacedContainer } from "../common/Containers";

const DownloadDokto = () => (
  <Box
    flex="1"
    d="flex"
    flexDir="column"
    justifyContent={["flex-end", "flex-end", "center", "center"]}
    bgImage={BluePhonesIMG}
    minHeight={["60vh", "60vh", "60vh", "100vh", "100vh"]}
    bgRepeat="no-repeat"
    bgSize="contain"
  >
    <SpacedContainer py="20">
      <Heading as="h1" size="lg" fontWeight="bold" px={6} py={7} color="#26004d">
        Download the Dokto App
      </Heading>
      <Box d="flex" pb="12">
        <Link href="/">
          <Image cursor="pointer" w="310px" px={6} py={3} src={PlayStoreIMG} borderRadius="25px" />
        </Link>
        <Link href="/">
          <Image cursor="pointer" w="310px" px={6} py={3} src={AppStoreIMG} />
        </Link>
      </Box>
    </SpacedContainer>
  </Box>
);

export default DownloadDokto;
